<?php

namespace App\Http\Controllers;

use App\Enums\CountryEnum;
use App\Enums\GenderEnum;
use App\Http\Requests\RegisterTraineeRequest;
use App\Models\Company;
use App\Models\Sector;
use App\Models\Session;
use App\Models\TrainingType;
use Exception;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request)
    {
        return Inertia::render('Welcome/Welcome', [
            "training_types" => TrainingType::all(),
            "sectors" => Sector::with("functies.specialisations")->get(),
            "sessions" => Session::with("speaker")
                           ->when($request->query("training_types"), function(Builder $query) use($request){
                               $query->whereRelation("trainingType", function(Builder $subQuery) use($request){
                                   $subQuery->whereIn("slug", explode(",", $request->query("training_types")));
                               });
                           })
                           ->when($request->query("sector"), function(Builder $query) use($request){
                               $query->whereRelation("sector", "slug", $request->query("sector"));
                           })
                           ->when($request->query("functie"), function(Builder $query) use($request){
                               $query->whereRelation("functie", "slug", $request->query("functie"));
                           })
                           ->when($request->query("specialisation"), function(Builder $query) use($request){
                               $query->whereRelation("specialisation", "slug", $request->query("specialisation"));
                           })
                           ->paginate(3)
                           ->withQueryString(),
            "trainingTypesString" => $request->query("training_types") ?? "",
            "sectorString" => $request->query("sector") ?? "",
            "functieString" => $request->query("functie") ?? "",
            "specialisationString" => $request->query("specialisation") ?? "",
           ]);
    }

    public function show(Session $session)
    {
        return Inertia::render("Welcome/ShowSession", [
            "session" => $session,
            "seminar" => $session->seminar,
            "sessions" => $session->seminar->sessions->load("trainingType", "speaker", "location")
        ]);
    }

    public function register()
    {
        return Inertia::render("Welcome/Register", [
            "countries" => CountryEnum::cases(),
            "genders" => GenderEnum::cases()
        ]);
    }

    public function store(RegisterTraineeRequest $request)
    {
        $validated = $request->validated();

        if(isset($validated["trainees"]) && isset($validated["sessions"]) && count($validated["trainees"]) > 0 && count($validated["sessions"]) > 0)
        {
            DB::transaction(function () use($validated){
                $company = Company::where("email", $validated["company_email"])->first();

                if(!$company){
                    $company = Company::create([
                        "name" => $validated["company_name"],
                        "email" => $validated["company_email"],
                        "phone" => $validated["company_phone"],
                        "address" => $validated["company_address"],
                        "post_code" => $validated["company_post_code"],
                        "city" => $validated["company_city"],
                        "country" => $validated["company_country"],
                        "vat_number" => $validated["company_vat_number"],
                        "business_number" => $validated["company_business_number"],
                        "billing_name" => $validated["company_billing_name"],
                        "billing_email" => $validated["company_billing_email"],
                        "billing_vat_number" => $validated["company_billing_vat_number"],
                        "billing_business_number" => $validated["company_billing_business_number"],
                        "billing_address" => $validated["company_billing_address"],
                        "billing_post_code" => $validated["company_billing_post_code"],
                        "billing_city" => $validated["company_billing_city"],
                        "billing_country" => $validated["company_billing_country"],
                        "remarks" => $validated["company_remarks"],
                    ]);
                }

                $data = [];
                foreach($validated["trainees"] as $trainee)
                {
                    $trainee["company_id"] = 1;

                    foreach($validated["sessions"] as $session)
                    {
                        $trainee["session_id"] = $session;
                        array_push($data, $trainee);
                    }
                }

                DB::table("trainees")->insert($data);
            });

            return Inertia::render("Welcome/Success");
        }else{
            throw new \Exception("Trainees and sessions required for registration.");
        }
    }
}

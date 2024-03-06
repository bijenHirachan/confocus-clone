<?php

use App\Http\Controllers\FunctieController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SectorController;
use App\Http\Controllers\SeminarController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\SpeakerController;
use App\Http\Controllers\SpecialisationController;
use App\Http\Controllers\TrainingTypeController;
use App\Http\Controllers\WelcomeController;
use App\Models\Sector;
use App\Models\Session;
use App\Models\TrainingType;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/', [WelcomeController::class, 'index']);

Route::get('/register/trainees', [WelcomeController::class, 'register']);
Route::post('/register/trainees', [WelcomeController::class, 'store']);




Route::middleware('auth')->group(function () {
    Route::resource('training-types', TrainingTypeController::class);
    Route::resource('sectors', SectorController::class);
    Route::get('functies/{functie}', [FunctieController::class, "show"])->name("functies.show");
    Route::put('functies/{functie}', [FunctieController::class, "update"])->name("functies.update");
    Route::resource('specialisations', SpecialisationController::class);
    Route::resource('seminars', SeminarController::class);
    Route::resource('speakers', SpeakerController::class);
    Route::resource('sessions', SessionController::class);
    Route::resource('locations', LocationController::class);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';

Route::get('/{session:slug}', [WelcomeController::class, 'show']);

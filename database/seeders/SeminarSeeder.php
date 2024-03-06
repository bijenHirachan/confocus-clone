<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SeminarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "name" => "Seminar One",
                "slug" => str()->slug("Seminar One"),
                "description" => "Lorem ipsum dolor sit amet. De grafische en typografische operatoren weten dit goed, in werkelijkheid hebben alle beroepen die zich bezighouden met het universum van communicatie een stabiele relatie met deze woorden, maar wat is het? Lorem ipsum is een dummy-tekst zonder betekenis."
            ],
            [
                "name" => "Seminar Two",
                "slug" => str()->slug("Seminar Two"),
                "description" => "Lorem ipsum dolor sit amet. De grafische en typografische operatoren weten dit goed, in werkelijkheid hebben alle beroepen die zich bezighouden met het universum van communicatie een stabiele relatie met deze woorden, maar wat is het? Lorem ipsum is een dummy-tekst zonder betekenis."

            ],
            [
                "name" => "Seminar Three",
                "slug" => str()->slug("Seminar Three"),
                "description" => "Lorem ipsum dolor sit amet. De grafische en typografische operatoren weten dit goed, in werkelijkheid hebben alle beroepen die zich bezighouden met het universum van communicatie een stabiele relatie met deze woorden, maar wat is het? Lorem ipsum is een dummy-tekst zonder betekenis."

            ]
        ];

        DB::table("seminars")->insert($data);
    }
}

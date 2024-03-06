<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpeakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "name" => "John Doe",
                "email" => "john@doe.com",
                "slug" => str()->slug("John Doe"),
                "phone" => "0483278738"
            ],
            [
                "name" => "Ricky Marten",
                "email" => "ricky@marten.com",
                "slug" => str()->slug("Ricky Marten"),
                "phone" => "0484448555"
            ],
            [
                "name" => "Roman Atwood",
                "email" => "roman@atwood.com",
                "slug" => str()->slug("Roman Atwood"),
                "phone" => "0499278567"
            ],
        ];

        DB::table("speakers")->insert($data);
    }
}

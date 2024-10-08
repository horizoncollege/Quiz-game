<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScoresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('scores')->insert([
            ['UserID' => 1, 'QuizID' => 1, 'Score' => 800],
            ['UserID' => 2, 'QuizID' => 2, 'Score' => 765],
        ]);
    }
}

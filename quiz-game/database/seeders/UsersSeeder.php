<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'UserRoleID' => 1, // Admin role
                'Naam' => 'Speler1',
                'E-mail' => 'speler@gmail.com',
                'Wachtwoord' => Hash::make('wachtwoord'), // Password encryption
                'MemberSince' => now(),
            ],
            [
                'UserRoleID' => 2, // Editor role
                'Naam' => 'Speler2',
                'E-mail' => 'speler2@gmail.com',
                'Wachtwoord' => Hash::make('wachtwoord'),
                'MemberSince' => now(),
            ],
        ]);
    }
}

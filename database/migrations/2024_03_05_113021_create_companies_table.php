<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("email");
            $table->string("phone");
            $table->string("address");
            $table->string("post_code");
            $table->string("city");
            $table->string("country");
            $table->string("vat_number")->nullable();
            $table->string("business_number")->nullable();

            $table->string("billing_name");
            $table->string("billing_email");
            $table->string("billing_vat_number")->nullable();
            $table->string("billing_business_number")->nullable();
            $table->string("billing_address");
            $table->string("billing_post_code");
            $table->string("billing_city");
            $table->string("billing_country");

            $table->string("remarks")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};

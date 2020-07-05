<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderHeadersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_headers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('code');
            $table->string('customer_name');
            $table->string('customer_surname');
            $table->text('customer_address');
            $table->enum('payment_type', ['credit', 'transfer' ,'bank']);
            $table->string('received_at')->nullable();
            $table->integer('deliver_price');
            $table->enum('status', ['paid','cancelled','waiting','arrived']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_headers');
    }
}

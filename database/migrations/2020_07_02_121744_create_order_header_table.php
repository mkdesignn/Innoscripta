<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderHeaderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_header', function (Blueprint $table) {
            $table->integer('code');
            $table->integer('customer_id');
            $table->string('issue_date');
            $table->text('address_id');
            $table->enum('payment_type', ['credit', 'transfer' ,'bank']);
            $table->string('received_at');
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
        Schema::dropIfExists('order_header');
    }
}

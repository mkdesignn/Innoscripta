<?php

use Illuminate\Support\Facades\DB;

function imageBaseUrl(){
    return url()->to('/').'/images/';
}


function getNextInvoiceCode(){
    if(\App\Model\OrderHeader::orderBy("code", "desc")->first() == null)
        return 50879;
    else
        return \App\Model\OrderHeader::orderBy("code", "desc")->first()->code + 1;
}

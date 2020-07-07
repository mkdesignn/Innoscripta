<?php

namespace App\Http\Middleware;

use Illuminate\Contracts\Events\Dispatcher;
use Closure;
use Illuminate\Foundation\Http\Events\RequestHandled;
use Tymon\JWTAuth\Facades\JWTAuth;

class CorsMiddleware
{
  /**
   * @var Dispatcher
   */
    private $events;

    public function __construct(Dispatcher $events)
    {

        $this->events = $events;
    }

  /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $response = $next($request);
        $response->headers->set('Access-Control-Expose-Headers', 'Authorization');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('AllowOrigin', '*');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

        return $response;
    }
}

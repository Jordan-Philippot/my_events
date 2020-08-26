<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class EventsController extends AbstractController {

    private $client;
    private $apiUrl = "https://api.eventful.com/json/";

    public function __construct(HttpClientInterface $client) {
        $this->client = $client;
    }

    /**
     * @Route("/events", name="events")
     */
    public function index() {

        $response = $this->client->request(
            'GET',
            $this->apiUrl.'/events/search?app_key='.$_ENV['API_KEY'].'&location=Lyon'
        );

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}

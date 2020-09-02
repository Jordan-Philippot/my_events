<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\HttpFoundation\Response;

class OneEventController extends AbstractController
{
    private $client;
    private $apiUrl = "https://api.eventful.com/json/";

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    /**
     * @Route("/event/{id}", name="event")
     * */
    public function index($id)
    {
        $response = $this->client->request(
            'GET',
            $this->apiUrl . '/events/get?app_key=' . $_ENV['API_KEY'] . '&id=' . $id
        );

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }
}

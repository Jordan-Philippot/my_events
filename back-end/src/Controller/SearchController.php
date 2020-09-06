<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class SearchController extends AbstractController
{

    private $client;
    private $apiUrl = "https://api.eventful.com/json/";

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    /**
     * @Route("/search/{location}/{category}", name="search")
     */
    public function index($location, $category)
    {
        $location = $location != "null" ?  '&location=' . $location : "";
            $response = $this->client->request(
            'GET',
            $this->apiUrl . '/events/search?app_key=' . $_ENV['API_KEY'] . $location . '&category=' . $category
        );

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }
}

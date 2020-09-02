<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class CategoriesController extends AbstractController
{
    private $client;
    private $apiUrl = "https://api.eventful.com/json/";

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    /**
     * @Route("/categories", name="categories")
     */
    public function index()
    {
        $response = $this->client->request(
            'GET',
            $this->apiUrl . 'categories/list/search?app_key=' . $_ENV['API_KEY'] . ''
        );

        $statusCode = $response->getStatusCode();
        $content = $response->getContent();

        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }
}

<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\HttpFoundation\Session\Session;

class UserController extends AbstractController
{


    /**
     * @Route("/user", methods={"POST"}, name="user")
     * @param Request $request
     * @return Response
     */
    public function registerOrConnect(Request $request)
    {


        $postData = json_decode($request->getContent(), true);

        $repository = $this->getDoctrine()->getRepository(User::class);

        $user = $repository->findOneBy(['facebookId' => $postData["userID"]]);

        if (!$user) {
            $entityManager = $this->getDoctrine()->getManager();

            $user = new User();
            $user->setName($postData["name"]);
            $user->setEmail($postData["email"]);
            $user->setImage($postData["picture"]["data"]["url"]);
            $user->setDescription($postData["description"]);
            $user->setFacebookId($postData["userID"]);

            $entityManager->persist($user);

            $entityManager->flush();
        }


        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}

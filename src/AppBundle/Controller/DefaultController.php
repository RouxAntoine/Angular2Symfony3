<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Glip\Git;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        $repo = new Git(__DIR__.DIRECTORY_SEPARATOR.'toto.git');
        /*$repo->git;*/


        // use case of jms_serializer
        /*$serializer = $container->get('jms_serializer');
        $serializer->serialize($data, $format);
        $data = $serializer->deserialize($inputStr, $typeName, $format);*/

        // replace this example code with whatever you need
        /*return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);*/
        return $this->render('::base.html.twig');
    }
}

<?php
/**
 * Created by PhpStorm.
 * User: antoine
 * Date: 25/02/17
 * Time: 17:42
 */

namespace RepositoryBundle\Controller;

use FOS\RestBundle\Controller\Annotations\Prefix;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Glip\Git;

/**
 * Class repoCtrl
 * @package RepositoryBundle\Controller
 * @Prefix("api_")
 */
class RepoCtrl extends Controller
{
    /**
     * @Get("/repositories", name="homepage")
     * @param Request $request
     * @return string
     */
    public function getAction(Request $request) {
        $repo = new Git(__DIR__.DIRECTORY_SEPARATOR.'toto.git');
        $path = $repo->getDir();
        var_dump($path);

        // use case of jms_serializer
        // $container = $this->container;
        //  $serializer = $container->get('jms_serializer');
        //  $serializer->serialize($data, $format);
        //  $data = $serializer->deserialize($inputStr, $typeName, $format);
        return $path;
    }
}
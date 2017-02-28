<?php
class AutoLoader
{
    public function __construct()
    {
        spl_autoload_register( array( $this, 'ClassLoader' ));
    }

    public function ClassLoader( $class )
    {
        if( class_exists( $class, false ))
            return true;
        $completePath = __DIR__ . DIRECTORY_SEPARATOR . 'lib' . DIRECTORY_SEPARATOR . $class . '.php';

        echo $completePath.'<br>';
        if( is_readable( $completePath ))
            require_once $completePath;
  }
}

$autoloader = new AutoLoader();
<?php 
function securizeImage(array $filesImage, string $path){
    if(!empty($filesImage))
        {
        $nameFile = $filesImage['name'];
        $typeFile = mime_content_type($filesImage['tmp_name']);
        $tmpFile = $filesImage['tmp_name'];
        $errorFile = $filesImage['error'];
        $sizeFile = $filesImage['size'];

        $extensions = ['png', 'jpg', 'jpeg', 'gif', 'jiff'];
        $type = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/jiff'];

        $extension = explode('.', $nameFile);


        $max_size = 8000000;


        if(in_array($typeFile, $type))
        {
            if(count($extension) <=2 && in_array(strtolower(end($extension)), $extensions))
            {
                if($sizeFile <= $max_size && $errorFile == 0)
                {
                    if(move_uploaded_file($tmpFile, "../".$path.$image = uniqid() . '.' . end($extension)) )
                    {
                        // $response = array(
                        //     "status" => "success",
                        //     "message" => "L'image a bien été upload'"
                        // );
                        // echo json_encode($response);
                        return $path.$image;
                    }
                    else
                    {
                        $response = array(
                            "status" => "failure",
                            "message" => "Echec de l'upload de l'image"
                        );
                        echo json_encode($response);

                        return false;
                    }
                }
                else
                {
                    $response = array(
                        "status" => "failure",
                        "message" => "Le poids de l'image est trop élevé"
                    );
                    echo json_encode($response);

                    return false;
                }
            }
            else
            {
                $response = array(
                    "status" => "failure",
                    "message" => "Merci d'upload une image !"
                );
                echo json_encode($response);

                return false;
            }
        }
        else
        {
            $response = array(
                "status" => "failure",
                "message" => "Type non autorisé !"
            );
            echo json_encode($response);

            return false;
        }
    }else{

        $response = array(
            "status" => "failure",
            "message" => "Le fichier est vide !"
        );
        echo json_encode($response);

        return false;
    }
}


function securizePdf(array $filesPdf, string $path)
{
    if(!empty($filesPdf)) {
        $nameFile = $filesPdf['name'];
        $typeFile = mime_content_type($filesPdf['tmp_name']);
        $tmpFile = $filesPdf['tmp_name'];
        $errorFile = $filesPdf['error'];
        $sizeFile = $filesPdf['size'];

        $extensions = ['pdf'];
        $type = ['application/pdf'];

        $extension = explode('.', $nameFile);


        $max_size = 10000000;


        if(in_array($typeFile, $type)) {
            if(count($extension) <=2 && in_array(strtolower(end($extension)), $extensions)) {
                if($sizeFile <= $max_size && $errorFile == 0) {
                    if(move_uploaded_file($tmpFile, "../../public/".$path.$pdf = uniqid() . '.' . end($extension))) {
                        // $response = array(
                        //     "status" => "",
                        //     "message" => "Le cahier des charges a bien été envoyé'"
                        // );
                        // echo json_encode($response);
                        return $path.$pdf;
                    } else {
                        $response = array(
                            "status" => "failure",
                            "message" => "Echec de l'envoi du cahier des charges"
                        );
                        echo json_encode($response);

                        return false;
                    }
                } else {
                    $response = array(
                        "status" => "failure",
                        "message" => "Le poids du cahier des charges est trop élevé"
                    );
                    echo json_encode($response);

                    return false;
                }
            } else {
                $response = array(
                    "status" => "failure",
                    "message" => "Merci d'upload un pdf !"
                );
                echo json_encode($response);

                return false;
            }
        } else {
            $response = array(
                "status" => "failure",
                "message" => "Type non autorisé !"
            );
            echo json_encode($response);

            return false;
        }
    } else {

        $response = array(
            "status" => "failure",
            "message" => "Le fichier est vide !"
        );
        echo json_encode($response);

        return false;
    }
}
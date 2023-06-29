<?php 

class Funders 
{
    private int $id;
    private mixed $picture;
    private mixed $download;
    private mixed $year;

    public function __construct (int $id,mixed $picture,mixed $download, mixed $year)
    {
        $this->id = $id;
        $this->picture = $picture;
        $this->download = $download;
        $this->year = $year;
    }

    public function setId (int $id):void { $this->id = $id;}
    public function setDownload (mixed $download):void { $this->download = $download;}
    public function setPicture (mixed $picture):void { $this->picture = $picture;}
    public function setYear(mixed $year):void { $this->year = $year;}

    public function getId ():int { return $this->id;}
    public function getPicture ():string { return $this->picture;}
    public function getDownload ():string { return $this->download;}
    public function getYear ():mixed { return $this->year;}

}

class FundersRepository extends ConnectBdd
{
    function modifFunders (object $funders):bool
    {
        $query = "UPDATE funders SET funders_id = 1";
        $execute = [];
        if ($funders->getPicture() !==false)
        {
            $picture = htmlspecialchars($funders->getPicture(),ENT_QUOTES);
            $query .= " , funders_picture = ?";
            $execute[] = $picture;
        }
        if ($funders->getDownload() !==false) {
            $download = htmlspecialchars($funders->getDownload(),ENT_QUOTES);
            $query .= " , funders_download = ?";
            $execute[] = $download;

        }
        if ($funders->getYear() !== false) {
            $year = htmlspecialchars($funders->getYear(),ENT_QUOTES);
            $query .= " , funders_activity_year = ?";
            $execute[] = $year;
        }
        if (empty($execute)){
            return false;
        }

        $req = $this->bdd->prepare($query."WHERE funders_id = 1");
        $isUpdate = $req->execute($execute);
        return $isUpdate;
    }
}
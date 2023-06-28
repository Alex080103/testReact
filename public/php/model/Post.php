<?php 

class Post 
{
    private int $id;
    private string $description;
    private string $link;
    private string $video_link;
    private string $poster;
    private string $video;
    private string $role;

    public function __construct( int $id, string $description, string $link, string $video_link, string $poster, string $video, string $role )
    {
        $this->id = $id;
        $this->description = $description;
        $this->link = $link;
        $this->video_link = $video_link;
        $this->poster = $poster;
        $this->video = $video;
        $this->role = $role;
    }

    public function setId (int $id) { $this->id = $id; }
    public function setDescription(string $description) { $this->description = $description; }
    public function setLink (string $link) { $this->link = $link; }
    public function setVideoLink (string $video_link) { $this->video_link = $video_link; }
    public function setPoster (string $poster) { $this->poster = $poster; }
    public function setVideo (string $video) { $this->video = $video; }
    public function setRole (string $role) { $this->role = $role; }
    
    public function getId ():int { return $this->id; }
    public function getDescription ():string { return $this->description; }
    public function getLink ():string { return $this->link; }
    public function getVideoLink ():string { return $this->video_link; }
    public function getPoster ():string { return $this->poster; }
    public function getVideo ():string { return $this->video; }
    public function getRole ():string { return $this->role; }
}
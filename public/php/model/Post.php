<?php 

class Post 
{
    private int $id;
    private string $date;
    private string $description;
    private string $link;
    private string $video_link;
    private mixed $poster;
    private mixed $video;
    private mixed $status;

    public function __serialize() 
    {
        return [
            'id' => $this->id,
            'date' => $this->date,
            'description' => $this->description,
            'link' => $this->link,
            'video_link' => $this->video_link,
            'poster' => $this->poster,
            'video' => $this->video,
            'status' => $this->status
            // 'role' => $this->role,
        ];
    }

    public function __construct( int $id, string $date, string $description, string $link, string $video_link, mixed $poster, mixed $video, mixed $status)
    {
        $this->id = $id;
        $this->date = $date;
        $this->description = $description;
        $this->link = $link;
        $this->video_link = $video_link;
        $this->poster = $poster;
        $this->video = $video;
        $this->status = $status;
    }

    public function setId (int $id) { $this->id = $id; }
    public function setDate(string $date) { $this->date = $date ;}
    public function setDescription(string $description) { $this->description = $description; }
    public function setLink (string $link) { $this->link = $link; }
    public function setVideoLink (string $video_link) { $this->video_link = $video_link; }
    public function setPoster (string $poster) { $this->poster = $poster; }
    public function setVideo (string $video) { $this->video = $video; }
    public function setStatus(string $status) { $this->status = $status; }
    
    public function getId ():int { return $this->id; }
    public function getDate():string { return $this->date; }
    public function getDescription ():string { return $this->description; }
    public function getLink ():string { return $this->link; }
    public function getVideoLink ():string { return $this->video_link; }
    public function getPoster ():mixed { return $this->poster; }
    public function getVideo ():mixed { return $this->video; }
    public function getStatus():mixed { return $this->status; }
}

class PostRepository extends ConnectBdd
{
    function showAllPosts()
    {
        $req = $this->bdd->prepare("SELECT * FROM post");
        $req->execute();
        $datas = $req->fetchAll(PDO::FETCH_ASSOC);
        $posts = [];
        // var_dump($datas);
        foreach ( $datas as $data ) {
            $post = new Post($data['post_id'], $data['post_date'], $data['post_description'], 
            $data['post_link'], $data['post_video_link'], $data['post_poster'], $data['post_video'], $data['post_status']);
            $postRepository = new PostRepository;
            $post = $post->__serialize();
            $posts[] = $post;
        }
        return $posts;
    }

    function addPost(object $post): bool
    {
        $date = htmlspecialchars($post->getDate(),ENT_QUOTES);
        $description = htmlspecialchars($post->getDescription(),ENT_QUOTES);
        $link = htmlspecialchars($post->getLink(),ENT_QUOTES);
        $video_link = htmlspecialchars($post->getVideoLink(),ENT_QUOTES);
        $poster = htmlspecialchars($post->getPoster(),ENT_QUOTES);
        $video = htmlspecialchars($post->getVideo(),ENT_QUOTES);
        $status = htmlspecialchars($post->getStatus(),ENT_QUOTES);

        $req = $this->bdd->prepare("INSERT INTO post (post_date, post_description, post_link, post_video_link, post_poster, post_video, post_status)
         VALUES (CURRENT_TIMESTAMP, ?, ?, ?, ?, ?)");
        $postIsAdd = $req->execute([$description, $link, $video_link, $poster, $video, $status]);
        return $postIsAdd;
    }

    function modifPost(object $post): bool
    {   
        $query = "UPDATE post SET  post_description = ?, post_link = ?, post_video_link = ?";
        $id = htmlspecialchars($post->getId(), ENT_QUOTES);
        $description = htmlspecialchars($post->getDescription(),ENT_QUOTES);
        $link = htmlspecialchars($post->getLink(),ENT_QUOTES);
        $video_link = htmlspecialchars($post->getVideoLink(),ENT_QUOTES);
        $video = htmlspecialchars($post->getVideo(),ENT_QUOTES);
        $status = htmlspecialchars($post->getStatus(),ENT_QUOTES);
        $execute = [$description, $link, $video_link];

        // var_dump($post->getPoster());

        if ($post->getPoster() !== false) {
            $poster = htmlspecialchars($post->getPoster(),ENT_QUOTES);
            $query .= ", post_poster = ?";
            $execute[] = $poster;
        // var_dump($poster);

        }
        if ($post->getVideo() !== false) {
            $query .= ", post_video = ?";
            $execute[] = $video;
        }

        $query .= ", post_status = ?";
        $execute[] = $id;
        $execute[] = $status;


        $req = $this->bdd->prepare($query . "WHERE post_id = ?");
        $postIsUpdate = $req->execute($execute);
        return $postIsUpdate;
    }

    function deletePost($id): bool
    {
        $id = htmlspecialchars($id, ENT_QUOTES);
        $req = $this->bdd->prepare("DELETE FROM post WHERE post_id = ?");
        $isDelete = $req->execute([$id]);
        return $isDelete;
    }
}
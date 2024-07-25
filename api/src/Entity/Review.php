<?php

namespace App\Entity;
 
use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
 
 /** A review of a book. */
#[ORM\Entity]
#[ApiResource]
#[ApiFilter(SearchFilter::class, properties: ['id' => 'exact'])]
class Review
{
    /** The ID of this review. */
    #[ORM\Id, ORM\Column, ORM\GeneratedValue]
    #[ApiFilter(OrderFilter::class)]
    private ?int $id = null;
    
    /** The rating of this review (between 0 and 5). */
    #[ORM\Column(type: 'smallint')]
    #[Assert\Range(min: 0, max: 5)]
    #[ApiFilter(OrderFilter::class)]
    public int $rating = 0;
 
    /** The body of the review. */
    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank]
    public string $body = '';
 
    /** The author of the review. */
    #[ORM\Column]
    #[Assert\NotBlank]
    #[ApiFilter(OrderFilter::class)]
    public string $author = '';
 
    /** The date of publication of this review.*/
    #[ORM\Column]
    #[Assert\NotNull]
    #[ApiFilter(OrderFilter::class)]
    public ?\DateTimeImmutable $publicationDate = null;
 
    /** The book this review is about. */
    #[ORM\ManyToOne(inversedBy: 'reviews')]
    #[Assert\NotNull]
    public ?Book $book = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
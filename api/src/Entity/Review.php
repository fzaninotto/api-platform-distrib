<?php

namespace App\Entity;
 
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\ApiProperty;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Doctrine\Orm\Filter\NumericFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
 
 /** A review of a book. */
#[ORM\Entity]
#[ApiResource(mercure: true)]
#[ApiFilter(OrderFilter::class, properties: [
    'id' => 'ASC',
    'rating' => 'ASC',
    'author' => 'ASC',
    'publicationDate' => 'DESC',
])]
#[ApiFilter(SearchFilter::class, properties: [
    'id' => 'exact',
    'author' => 'ipartial',
    'body' => 'ipartial'
])]
#[ApiFilter(NumericFilter::class, properties: ['rating'])]
#[ApiFilter(DateFilter::class, properties: ['publicationDate'])]
class Review
{
    /** The ID of this review. */
    #[ORM\Id, ORM\Column, ORM\GeneratedValue]
    private ?int $id = null;
    
    /** The rating of this review (between 0 and 5). */
    #[ORM\Column(type: 'smallint')]
    #[Assert\Range(min: 0, max: 5)]
    public int $rating = 0;
 
    /** The body of the review. */
    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank]
    public string $body = '';
 
    /** The author of the review. */
    #[ORM\Column]
    #[Assert\NotBlank]
    public string $author = '';
 
    /** The date of publication of this review.*/
    #[ORM\Column]
    #[Assert\NotNull]
    #[ApiProperty(iris: ["https://schema.org/name"])]
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
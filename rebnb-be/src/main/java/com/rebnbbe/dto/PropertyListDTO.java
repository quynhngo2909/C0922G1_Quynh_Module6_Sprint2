package com.rebnbbe.dto;

public class PropertyListDTO {
    private Long id;
    private String title;
    private String description;
    private String country;
    private String region;
    private String city;
    private Double pricePerNight;
    private Double score;
    private Integer distance;
    private String image;

    public PropertyListDTO() {
    }

    public PropertyListDTO(Long id, String title, String description, String country, String region, String city, Double pricePerNight, Double score, Integer distance, String image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.country = country;
        this.region = region;
        this.city = city;
        this.pricePerNight = pricePerNight;
        this.score = score;
        this.distance = distance;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Double getPricePerNight() {
        return pricePerNight;
    }

    public void setPricePerNight(Double pricePerNight) {
        this.pricePerNight = pricePerNight;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Integer getDistance() {
        return distance;
    }

    public void setDistance(Integer distance) {
        this.distance = distance;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}

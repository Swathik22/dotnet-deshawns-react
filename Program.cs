using DOTNET_DESHAWNS_REACT.Models;
using DOTNET_DESHAWNS_REACT.Models.DTOs;

List<Dog> dogs = new List<Dog>
{
    new Dog { Id = 1, Name = "Max", WalkerId = 1, CityId = 1 },
    new Dog { Id = 2, Name = "Bella", WalkerId = 2, CityId = 2 },
    new Dog { Id = 3, Name = "Charlie", WalkerId = 3, CityId = 1 },
    new Dog { Id = 4, Name = "Lucy", WalkerId = 1, CityId = 3 },
    new Dog { Id = 5, Name = "Cooper", WalkerId = 2, CityId = 2 },
    new Dog { Id = 6, Name = "Daisy", WalkerId = 3, CityId = 1 },
    new Dog { Id = 7, Name = "Bailey", WalkerId = 1, CityId = 2 },
    new Dog { Id = 8, Name = "Maggie", WalkerId = 2, CityId = 3 },
    new Dog { Id = 9, Name = "Maximus", WalkerId = 3, CityId = 1 },
    new Dog { Id = 10, Name = "Sadie", WalkerId = 1, CityId = 2 }
};

List<City> cities = new List<City>
{
    new City { Id = 1, Name = "New York" },
    new City { Id = 2, Name = "Los Angeles" },
    new City { Id = 3, Name = "Chicago" },
    new City { Id = 4, Name = "Houston" },
    new City { Id = 5, Name = "San Francisco" }
};

List<Walker> walkers = new List<Walker>
{
    new Walker { Id = 1, Name = "John" },
    new Walker { Id = 2, Name = "Emma" },
    new Walker { Id = 3, Name = "Michael" },
    new Walker { Id = 4, Name = "Sophia" },
    new Walker { Id = 5, Name = "Daniel" }
};



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/getAllDogs",()=>
{
    List<DogDTO> dogList=dogs.Select(d=>new DogDTO{
        Id=d.Id,
        Name=d.Name,
        WalkerId=d.WalkerId,
        CityId=d.CityId
    }).ToList();

    return dogList;
});

//Get dog details by Id
app.MapGet("/api/getDogDetails/{id}",(int id)=>{
    Dog dog=dogs.FirstOrDefault(d=>d.Id==id);
    Walker walker= walkers.FirstOrDefault(w=>w.Id==dog.WalkerId);
    
    DogDTO DogDetails= new DogDTO
    {
        Id=dog.Id,
        Name=dog.Name,
        WalkerId=dog.WalkerId,
        Walker=new WalkerDTO
        {
            Id=walker.Id,
            Name=walker.Name,
            Email=walker.Email
        }
    };

    return DogDetails;
});


app.Run();

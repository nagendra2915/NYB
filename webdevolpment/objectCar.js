//objects
const carProfile = 
{
    id: "CAR2098",
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
    color: "Obsidian Black",
    variant: "C300 4MATIC",
    price: 843950,
    mileage: 14,
    fuelType: "Petrol",
    transmission: "Automatic",
    owner: 
    {
      name: "TARAKA RAMARAO",
      contact: "tarak9999@example.com",
      city: "Hyderabad"
    },
    features:
      [ "Panoramic Sunroof",
      "Heated and Ventilated Seats",
      "Ambient Lighting",
      "MBUX Voice Control System",
      "Apple CarPlay & Android Auto",
      "360° Camera",
      "Blind Spot Assist",
      "Wireless Charging",
      "Harman Kardon sound system" ],
       isAvailable: true,
  
    displayProfile() {
      console.log("--- Car Profile ---");
      console.log(`ID: ${this.id}`);
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model} (${this.year})`);
      console.log(`Variant: ${this.variant}`);
      console.log(`Color: ${this.color}`);
      console.log(`Fuel Type: ${this.fuelType}`);
      console.log(`Transmission: ${this.transmission}`);
      console.log(`Mileage: ${this.mileage} km`);
      console.log(`Price: $${this.price}`);
      console.log(`Availability: ${this.isAvailable ? "Available" : "Not Available"}`);
      console.log("\n Features:");
      this.features.forEach((feature, index) => 
      {
        console.log(`${index + 1}. ${feature}`);
      });
      console.log("\n Owner Info:");
      console.log(`  Name: ${this.owner.name}`);
      console.log(`  Contact: ${this.owner.contact}`);
      console.log(`  City: ${this.owner.city}`);
    }
  };
  carProfile.displayProfile();
  
var num = 0;

var PlayGame, CaringForCorals, PickAvatar, BoyCharacter, GirlCharacter, PickLocation, Beach, BathroomShower, LakeRiver, OceanSea, WhichSunscreen, Physical, Chemical, OxybenzoneFree, Yes, No, Sunglasses, SunglassesSunscreen, Umbrella, UmbrellaSunscreen, FullSleveDress, FullSleveDressSunscreen;

var BoyAvatar, GirlAvatar

function preload(){
  launchPage = loadImage("images/LaunchPage.jpg");
  bleachedCoral = loadImage("images/BleachedCoral.jpg");
  healthyCoral = loadImage("images/HealthyCoral.jpg");
  boyCharacter = loadImage("images/BoyCharacter.jpg");
  girlCharacter = loadImage("images/GirlCharacter.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight-105);

  BoyAvatar = createSprite(200,350);
  GirlAvatar = createSprite(1275,350);
}

function draw() {

  //background(launchPage);

  PlayGame = createButton('Play Game!');
  PlayGame.position(1450,600);
  PlayGame.size(125,65);

  CaringForCorals = createButton('Caring for the Corals');
  CaringForCorals.position(700,50);
  CaringForCorals.size(300,50);

  PlayGame.mousePressed(()=>{

    PlayGame.hide();
    CaringForCorals.hide();

    PickAvatar = createButton('Pick Your Avatar!');
    PickAvatar.position(700,50);
    PickAvatar.size(300,50);

    BoyCharcter = createButton('Boy Character');
    BoyCharcter.position(100,750);
    BoyCharcter.size(450,200);

    GirlCharcter = createButton('Girl Character');
    GirlCharcter.position(1175,750);
    GirlCharcter.size(450,200);

    BoyCharcter.mousePressed(()=>{

      num === 1;

      PickAvatar.hide();
      BoyCharcter.hide();
      GirlCharcter.hide();

      EnterAnswer1 = createInput("Enter Answer Here");
      EnterAnswer1.position(displayWidth/2 - 100 , displayHeight/2 + 325);

      PickLocation = createButton('Pick a Location!');
      PickLocation.position(700,50);
      PickLocation.size(300,50);
  
      Beach = createButton('Beach');
      Beach.position(50,250);
      Beach.size(250,400);
  
      BathroomShower = createButton('Bathroom Shower');
      BathroomShower.position(500,250);
      BathroomShower.size(250,400);

      LakeRiver = createButton('Lake/River');
      LakeRiver.position(950,250);
      LakeRiver.size(250,400);
  
      OceanSea = createButton('Ocean/Sea');
      OceanSea.position(1400,250);
      OceanSea.size(250,400);

      Beach.mousePressed(()=>{
        PickLocation.hide();
        Beach.hide();
        BathroomShower.hide();
        LakeRiver.hide();
        OceanSea.hide();
        EnterAnswer1.hide();
  
        WhichSunscreen = createButton('Which type of Sunscreen?');
        WhichSunscreen.position(700,50);
        WhichSunscreen.size(300,50);

        EnterAnswer2 = createInput("Enter Answer Here");
        EnterAnswer2.position(displayWidth/2 - 100 , displayHeight/2 + 325);
    
        Physical = createButton('Physical');
        Physical.position(100,250);
        Physical.size(450,600);

        Chemical = createButton('Chemical');
        Chemical.position(1175,250);
        Chemical.size(450,600);

          Physical.mousePressed(()=>{
            WhichSunscreen.hide();
            Physical.hide();
            Chemical.hide();
            EnterAnswer2.hide();
      
            OxybenzoneFree = createButton('Which Object will you use?');
            OxybenzoneFree.position(700,50);
            OxybenzoneFree.size(300,50);

            EnterAnswer3 = createInput("Enter Answer Here");
            EnterAnswer3.position(displayWidth/2 - 100 , displayHeight/2 + 325);
        
            Hat = createButton('Hat');
            Hat.position(50,150);
            Hat.size(250,300);
        
            HatSunscreen = createButton('Hat (With Sunscreen)');
            HatSunscreen.position(500,150);
            HatSunscreen.size(250,300);
      
            Sunglasses = createButton('Sunglasses');
            Sunglasses.position(950,150);
            Sunglasses.size(250,300);
        
            SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
            SunglassesSunscreen.position(1400,150);
            SunglassesSunscreen.size(250,300);

            Umbrella = createButton('Umbrella');
            Umbrella.position(50,650);
            Umbrella.size(250,300);
        
            UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
            UmbrellaSunscreen.position(500,650);
            UmbrellaSunscreen.size(250,300);
      
            FullSleveDress = createButton('Full Sleve Dress');
            FullSleveDress.position(950,650);
            FullSleveDress.size(250,300);
        
            FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
            FullSleveDressSunscreen.position(1400,650);
            FullSleveDressSunscreen.size(250,300);
          })

          Chemical.mousePressed(()=>{
            WhichSunscreen.hide();
            Physical.hide();
            Chemical.hide();
            EnterAnswer2.hide();
        
            OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
            OxybenzoneFree.position(700,50);
            OxybenzoneFree.size(300,50);

            EnterAnswer4 = createInput("Enter Answer Here");
            EnterAnswer4.position(displayWidth/2 - 100 , displayHeight/2 + 325);
        
            Yes = createButton('Yes');
            Yes.position(100,250);
            Yes.size(450,600);
        
            No = createButton('No');
            No.position(1175,250);
            No.size(450,600);

              Yes.mousePressed(()=>{
                OxybenzoneFree.hide();
                Yes.hide();
                No.hide();
                EnterAnswer4.hide();
          
                AmountSprays = createButton('How Many Sprays will you use??');
                AmountSprays.position(700,50);
                AmountSprays.size(300,50);
            
                Sprays1 = createButton('1 Spray');
                Sprays1.position(50,250);
                Sprays1.size(250,400);
            
                Sprays2 = createButton('2 Sprays');
                Sprays2.position(500,250);
                Sprays2.size(250,400);
          
                Sprays3 = createButton('3 Sprays');
                Sprays3.position(950,250);
                Sprays3.size(250,400);
            
                Sprays4 = createButton('4 Sprays');
                Sprays4.position(1400,250);
                Sprays4.size(250,400);
              })
      
              No.mousePressed(()=>{
                OxybenzoneFree.hide();
                Yes.hide();
                No.hide();
                EnterAnswer4.hide();
          
                AmountSprays = createButton('How Many Sprays will you use??');
                AmountSprays.position(700,50);
                AmountSprays.size(300,50);
            
                Sprays1 = createButton('1 Spray');
                Sprays1.position(50,250);
                Sprays1.size(250,400);
            
                Sprays2 = createButton('2 Sprays');
                Sprays2.position(500,250);
                Sprays2.size(250,400);
          
                Sprays3 = createButton('3 Sprays');
                Sprays3.position(950,250);
                Sprays3.size(250,400);
            
                Sprays4 = createButton('4 Sprays');
                Sprays4.position(1400,250);
                Sprays4.size(250,400);
              })
        })
    })

    BathroomShower.mousePressed(()=>{
      PickLocation.hide();
      Beach.hide();
      BathroomShower.hide();
      LakeRiver.hide();
      OceanSea.hide();
      EnterAnswer1.hide();

      WhichSunscreen = createButton('Which type of Sunscreen?');
      WhichSunscreen.position(700,50);
      WhichSunscreen.size(300,50);

      EnterAnswer5 = createInput("Enter Answer Here");
      EnterAnswer5.position(displayWidth/2 - 100 , displayHeight/2 + 325);
  
      Physical = createButton('Physical');
      Physical.position(100,250);
      Physical.size(450,600);

      Chemical = createButton('Chemical');
      Chemical.position(1175,250);
      Chemical.size(450,600);

        Physical.mousePressed(()=>{
          WhichSunscreen.hide();
          Physical.hide();
          Chemical.hide();
          EnterAnswer5.hide();
    
          OxybenzoneFree = createButton('Which Object will you use?');
          OxybenzoneFree.position(700,50);
          OxybenzoneFree.size(300,50);

          EnterAnswer6 = createInput("Enter Answer Here");
          EnterAnswer6.position(displayWidth/2 - 100 , displayHeight/2 + 325);
      
          Hat = createButton('Hat');
          Hat.position(50,150);
          Hat.size(250,300);
        
          HatSunscreen = createButton('Hat (With Sunscreen)');
          HatSunscreen.position(500,150);
          HatSunscreen.size(250,300);
    
          Sunglasses = createButton('Sunglasses');
          Sunglasses.position(950,150);
          Sunglasses.size(250,300);
      
          SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
          SunglassesSunscreen.position(1400,150);
          SunglassesSunscreen.size(250,300);

          Umbrella = createButton('Umbrella');
          Umbrella.position(50,650);
          Umbrella.size(250,300);
      
          UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
          UmbrellaSunscreen.position(500,650);
          UmbrellaSunscreen.size(250,300);
    
          FullSleveDress = createButton('Full Sleve Dress');
          FullSleveDress.position(950,650);
          FullSleveDress.size(250,300);
      
          FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
          FullSleveDressSunscreen.position(1400,650);
          FullSleveDressSunscreen.size(250,300);
        })

        Chemical.mousePressed(()=>{
          WhichSunscreen.hide();
          Physical.hide();
          Chemical.hide();
          EnterAnswer5.hide();
      
          OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
          OxybenzoneFree.position(700,50);
          OxybenzoneFree.size(300,50);

          EnterAnswer7 = createInput("Enter Answer Here");
          EnterAnswer7.position(displayWidth/2 - 100 , displayHeight/2 + 325);
      
          Yes = createButton('Yes');
          Yes.position(100,250);
          Yes.size(450,600);
      
          No = createButton('No');
          No.position(1175,250);
          No.size(450,600);

            Yes.mousePressed(()=>{
              OxybenzoneFree.hide();
              Yes.hide();
              No.hide();
              EnterAnswer7.hide();
        
              AmountSprays = createButton('How Many Sprays will you use??');
              AmountSprays.position(700,50);
              AmountSprays.size(300,50);

              EnterAnswer8 = createInput("Enter Answer Here");
              EnterAnswer8.position(displayWidth/2 - 100 , displayHeight/2 + 325);
          
              Sprays1 = createButton('1 Spray');
              Sprays1.position(50,250);
              Sprays1.size(250,400);
          
              Sprays2 = createButton('2 Sprays');
              Sprays2.position(500,250);
              Sprays2.size(250,400);
        
              Sprays3 = createButton('3 Sprays');
              Sprays3.position(950,250);
              Sprays3.size(250,400);
          
              Sprays4 = createButton('4 Sprays');
              Sprays4.position(1400,250);
              Sprays4.size(250,400);
            })
    
            No.mousePressed(()=>{
              OxybenzoneFree.hide();
              Yes.hide();
              No.hide();
              EnterAnswer7.hide();
        
              AmountSprays = createButton('How Many Sprays will you use??');
              AmountSprays.position(700,50);
              AmountSprays.size(300,50);
          
              Sprays1 = createButton('1 Spray');
              Sprays1.position(50,250);
              Sprays1.size(250,400);
          
              Sprays2 = createButton('2 Sprays');
              Sprays2.position(500,250);
              Sprays2.size(250,400);
        
              Sprays3 = createButton('3 Sprays');
              Sprays3.position(950,250);
              Sprays3.size(250,400);
          
              Sprays4 = createButton('4 Sprays');
              Sprays4.position(1400,250);
              Sprays4.size(250,400);
            })
      })
  })

  LakeRiver.mousePressed(()=>{
    PickLocation.hide();
    Beach.hide();
    BathroomShower.hide();
    LakeRiver.hide();
    OceanSea.hide();
    EnterAnswer1.hide();

    WhichSunscreen = createButton('Which type of Sunscreen?');
    WhichSunscreen.position(700,50);
    WhichSunscreen.size(300,50);

    EnterAnswer8 = createInput("Enter Answer Here");
    EnterAnswer8.position(displayWidth/2 - 100 , displayHeight/2 + 325);

    Physical = createButton('Physical');
    Physical.position(100,250);
    Physical.size(450,600);

    Chemical = createButton('Chemical');
    Chemical.position(1175,250);
    Chemical.size(450,600);

      Physical.mousePressed(()=>{
        WhichSunscreen.hide();
        Physical.hide();
        Chemical.hide();
        EnterAnswer8.hide();

        OxybenzoneFree = createButton('Which Object will you use?');
        OxybenzoneFree.position(700,50);
        OxybenzoneFree.size(300,50);

        EnterAnswer9 = createInput("Enter Answer Here");
        EnterAnswer9.position(displayWidth/2 - 100 , displayHeight/2 + 325);
    
        Hat = createButton('Hat');
        Hat.position(50,150);
        Hat.size(250,300);
        
        HatSunscreen = createButton('Hat (With Sunscreen)');
        HatSunscreen.position(500,150);
        HatSunscreen.size(250,300);

        Sunglasses = createButton('Sunglasses');
        Sunglasses.position(950,150);
        Sunglasses.size(250,300);
    
        SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
        SunglassesSunscreen.position(1400,150);
        SunglassesSunscreen.size(250,300);

        Umbrella = createButton('Umbrella');
        Umbrella.position(50,650);
        Umbrella.size(250,300);
    
        UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
        UmbrellaSunscreen.position(500,650);
        UmbrellaSunscreen.size(250,300);
  
        FullSleveDress = createButton('Full Sleve Dress');
        FullSleveDress.position(950,650);
        FullSleveDress.size(250,300);
    
        FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
        FullSleveDressSunscreen.position(1400,650);
        FullSleveDressSunscreen.size(250,300);
      })

      Chemical.mousePressed(()=>{
        WhichSunscreen.hide();
        Physical.hide();
        Chemical.hide();
        EnterAnswer8.hide();
    
        OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
        OxybenzoneFree.position(700,50);
        OxybenzoneFree.size(300,50);

        EnterAnswer10 = createInput("Enter Answer Here");
        EnterAnswer10.position(displayWidth/2 - 100 , displayHeight/2 + 325);
    
        Yes = createButton('Yes');
        Yes.position(100,250);
        Yes.size(450,600);
    
        No = createButton('No');
        No.position(1175,250);
        No.size(450,600);

          Yes.mousePressed(()=>{
            OxybenzoneFree.hide();
            Yes.hide();
            No.hide();
            EnterAnswer10.hide();
      
            AmountSprays = createButton('How Many Sprays will you use??');
            AmountSprays.position(700,50);
            AmountSprays.size(300,50);

            EnterAnswer11 = createInput("Enter Answer Here");
            EnterAnswer11.position(displayWidth/2 - 100 , displayHeight/2 + 325);
        
            Sprays1 = createButton('1 Spray');
            Sprays1.position(50,250);
            Sprays1.size(250,400);
        
            Sprays2 = createButton('2 Sprays');
            Sprays2.position(500,250);
            Sprays2.size(250,400);
      
            Sprays3 = createButton('3 Sprays');
            Sprays3.position(950,250);
            Sprays3.size(250,400);
        
            Sprays4 = createButton('4 Sprays');
            Sprays4.position(1400,250);
            Sprays4.size(250,400);
          })

          No.mousePressed(()=>{
            OxybenzoneFree.hide();
            Yes.hide();
            No.hide();
            EnterAnswer10.hide();
      
            AmountSprays = createButton('How Many Sprays will you use??');
            AmountSprays.position(700,50);
            AmountSprays.size(300,50);

            EnterAnswer12 = createInput("Enter Answer Here");
            EnterAnswer12.position(displayWidth/2 - 100 , displayHeight/2 + 325);
        
            Sprays1 = createButton('1 Spray');
            Sprays1.position(50,250);
            Sprays1.size(250,400);
        
            Sprays2 = createButton('2 Sprays');
            Sprays2.position(500,250);
            Sprays2.size(250,400);
      
            Sprays3 = createButton('3 Sprays');
            Sprays3.position(950,250);
            Sprays3.size(250,400);
        
            Sprays4 = createButton('4 Sprays');
            Sprays4.position(1400,250);
            Sprays4.size(250,400);
          })
    })
})

OceanSea.mousePressed(()=>{
  PickLocation.hide();
  Beach.hide();
  BathroomShower.hide();
  LakeRiver.hide();
  OceanSea.hide();
  EnterAnswer1.hide();

  WhichSunscreen = createButton('Which type of Sunscreen?');
  WhichSunscreen.position(700,50);
  WhichSunscreen.size(300,50);

  EnterAnswer13 = createInput("Enter Answer Here");
  EnterAnswer13.position(displayWidth/2 - 100 , displayHeight/2 + 325);

  Physical = createButton('Physical');
  Physical.position(100,250);
  Physical.size(450,600);

  Chemical = createButton('Chemical');
  Chemical.position(1175,250);
  Chemical.size(450,600);

    Physical.mousePressed(()=>{
      WhichSunscreen.hide();
      Physical.hide();
      Chemical.hide();
      EnterAnswer13.hide();

      OxybenzoneFree = createButton('Which Object will you use?');
      OxybenzoneFree.position(700,50);
      OxybenzoneFree.size(300,50);

      EnterAnswer14 = createInput("Enter Answer Here");
      EnterAnswer14.position(displayWidth/2 - 100 , displayHeight/2 + 325);

      Hat = createButton('Hat');
      Hat.position(50,150);
      Hat.size(250,300);
     
      HatSunscreen = createButton('Hat (With Sunscreen)');
      HatSunscreen.position(500,150);
      HatSunscreen.size(250,300);

      Sunglasses = createButton('Sunglasses');
      Sunglasses.position(950,150);
      Sunglasses.size(250,300);

      SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
      SunglassesSunscreen.position(1400,150);
      SunglassesSunscreen.size(250,300);

      Umbrella = createButton('Umbrella');
      Umbrella.position(50,650);
      Umbrella.size(250,300);
  
      UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
      UmbrellaSunscreen.position(500,650);
      UmbrellaSunscreen.size(250,300);

      FullSleveDress = createButton('Full Sleve Dress');
      FullSleveDress.position(950,650);
      FullSleveDress.size(250,300);
  
      FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
      FullSleveDressSunscreen.position(1400,650);
      FullSleveDressSunscreen.size(250,300);
    })

    Chemical.mousePressed(()=>{
      WhichSunscreen.hide();
      Physical.hide();
      Chemical.hide();
      EnterAnswer13.hide();

      OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
      OxybenzoneFree.position(700,50);
      OxybenzoneFree.size(300,50);

      EnterAnswer15 = createInput("Enter Answer Here");
      EnterAnswer15.position(displayWidth/2 - 100 , displayHeight/2 + 325);

      Yes = createButton('Yes');
      Yes.position(100,250);
      Yes.size(450,600);

      No = createButton('No');
      No.position(1175,250);
      No.size(450,600);

        Yes.mousePressed(()=>{
          OxybenzoneFree.hide();
          Yes.hide();
          No.hide();
          EnterAnswer15.hide();
    
          AmountSprays = createButton('How Many Sprays will you use??');
          AmountSprays.position(700,50);
          AmountSprays.size(300,50);

          EnterAnswer16 = createInput("Enter Answer Here");
          EnterAnswer16.position(displayWidth/2 - 100 , displayHeight/2 + 325);
      
          Sprays1 = createButton('1 Spray');
          Sprays1.position(50,250);
          Sprays1.size(250,400);
      
          Sprays2 = createButton('2 Sprays');
          Sprays2.position(500,250);
          Sprays2.size(250,400);
    
          Sprays3 = createButton('3 Sprays');
          Sprays3.position(950,250);
          Sprays3.size(250,400);
      
          Sprays4 = createButton('4 Sprays');
          Sprays4.position(1400,250);
          Sprays4.size(250,400);
        })

        No.mousePressed(()=>{
          OxybenzoneFree.hide();
          Yes.hide();
          No.hide();
          EnterAnswer15.hide();
    
          AmountSprays = createButton('How Many Sprays will you use??');
          AmountSprays.position(700,50);
          AmountSprays.size(300,50);

          EnterAnswer17 = createInput("Enter Answer Here");
          EnterAnswer17.position(displayWidth/2 - 100 , displayHeight/2 + 325);
      
          Sprays1 = createButton('1 Spray');
          Sprays1.position(50,250);
          Sprays1.size(250,400);
      
          Sprays2 = createButton('2 Sprays');
          Sprays2.position(500,250);
          Sprays2.size(250,400);
    
          Sprays3 = createButton('3 Sprays');
          Sprays3.position(950,250);
          Sprays3.size(250,400);
      
          Sprays4 = createButton('4 Sprays');
          Sprays4.position(1400,250);
          Sprays4.size(250,400);
        })
  })
})
})

GirlCharcter.mousePressed(()=>{

  num === 1;

  PickAvatar.hide();
  BoyCharcter.hide();
  GirlCharcter.hide();

  PickLocation = createButton('Pick a Location!');
  PickLocation.position(700,50);
  PickLocation.size(300,50);

  EnterAnswer18 = createInput("Enter Answer Here");
  EnterAnswer18.position(displayWidth/2 - 100 , displayHeight/2 + 325);

  Beach = createButton('Beach');
  Beach.position(50,250);
  Beach.size(250,400);

  BathroomShower = createButton('Bathroom Shower');
  BathroomShower.position(500,250);
  BathroomShower.size(250,400);

  LakeRiver = createButton('Lake/River');
  LakeRiver.position(950,250);
  LakeRiver.size(250,400);

  OceanSea = createButton('Ocean/Sea');
  OceanSea.position(1400,250);
  OceanSea.size(250,400);

  Beach.mousePressed(()=>{
    PickLocation.hide();
    Beach.hide();
    BathroomShower.hide();
    LakeRiver.hide();
    OceanSea.hide();
    EnterAnswer18.hide();

    WhichSunscreen = createButton('Which type of Sunscreen?');
    WhichSunscreen.position(700,50);
    WhichSunscreen.size(300,50);

    EnterAnswer19 = createInput("Enter Answer Here");
    EnterAnswer19.position(displayWidth/2 - 100 , displayHeight/2 + 325);

    Physical = createButton('Physical');
    Physical.position(100,250);
    Physical.size(450,600);

    Chemical = createButton('Chemical');
    Chemical.position(1175,250);
    Chemical.size(450,600);

      Physical.mousePressed(()=>{
        WhichSunscreen.hide();
        Physical.hide();
        Chemical.hide();
        EnterAnswer19.hide();
  
        OxybenzoneFree = createButton('Which Object will you use?');
        OxybenzoneFree.position(700,50);
        OxybenzoneFree.size(300,50);

        EnterAnswer20 = createInput("Enter Answer Here");
        EnterAnswer20.position(displayWidth/2 - 100 , displayHeight/2 + 325);
    
        Hat = createButton('Hat');
        Hat.position(50,150);
        Hat.size(250,300);
        
        HatSunscreen = createButton('Hat (With Sunscreen)');
        HatSunscreen.position(500,150);
        HatSunscreen.size(250,300);
  
        Sunglasses = createButton('Sunglasses');
        Sunglasses.position(950,150);
        Sunglasses.size(250,300);
    
        SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
        SunglassesSunscreen.position(1400,150);
        SunglassesSunscreen.size(250,300);

        Umbrella = createButton('Umbrella');
        Umbrella.position(50,650);
        Umbrella.size(250,300);
    
        UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
        UmbrellaSunscreen.position(500,650);
        UmbrellaSunscreen.size(250,300);
  
        FullSleveDress = createButton('Full Sleve Dress');
        FullSleveDress.position(950,650);
        FullSleveDress.size(250,300);
    
        FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
        FullSleveDressSunscreen.position(1400,650);
        FullSleveDressSunscreen.size(250,300);
      })

      Chemical.mousePressed(()=>{
        WhichSunscreen.hide();
        Physical.hide();
        Chemical.hide();
        EnterAnswer19.hide();
    
        OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
        OxybenzoneFree.position(700,50);
        OxybenzoneFree.size(300,50);

        EnterAnswer21 = createInput("Enter Answer Here");
        EnterAnswer21.position(displayWidth/2 - 100 , displayHeight/2 + 325);
    
        Yes = createButton('Yes');
        Yes.position(100,250);
        Yes.size(450,600);
    
        No = createButton('No');
        No.position(1175,250);
        No.size(450,600);

          Yes.mousePressed(()=>{
            OxybenzoneFree.hide();
            Yes.hide();
            No.hide();
            EnterAnswer21.hide();
      
            AmountSprays = createButton('How Many Sprays will you use??');
            AmountSprays.position(700,50);
            AmountSprays.size(300,50);

            EnterAnswer22 = createInput("Enter Answer Here");
            EnterAnswer22.position(displayWidth/2 - 100 , displayHeight/2 + 325);
        
            Sprays1 = createButton('1 Spray');
            Sprays1.position(50,250);
            Sprays1.size(250,400);
        
            Sprays2 = createButton('2 Sprays');
            Sprays2.position(500,250);
            Sprays2.size(250,400);
      
            Sprays3 = createButton('3 Sprays');
            Sprays3.position(950,250);
            Sprays3.size(250,400);
        
            Sprays4 = createButton('4 Sprays');
            Sprays4.position(1400,250);
            Sprays4.size(250,400);
          })
  
          No.mousePressed(()=>{
            OxybenzoneFree.hide();
            Yes.hide();
            No.hide();
            EnterAnswer21.hide();
      
            AmountSprays = createButton('How Many Sprays will you use??');
            AmountSprays.position(700,50);
            AmountSprays.size(300,50);

            EnterAnswer23 = createInput("Enter Answer Here");
            EnterAnswer23.position(displayWidth/2 - 100 , displayHeight/2 + 325);
        
            Sprays1 = createButton('1 Spray');
            Sprays1.position(50,250);
            Sprays1.size(250,400);
        
            Sprays2 = createButton('2 Sprays');
            Sprays2.position(500,250);
            Sprays2.size(250,400);
      
            Sprays3 = createButton('3 Sprays');
            Sprays3.position(950,250);
            Sprays3.size(250,400);
        
            Sprays4 = createButton('4 Sprays');
            Sprays4.position(1400,250);
            Sprays4.size(250,400);
          })
    })
})

BathroomShower.mousePressed(()=>{
  PickLocation.hide();
  Beach.hide();
  BathroomShower.hide();
  LakeRiver.hide();
  OceanSea.hide();
  EnterAnswer18.hide();

  WhichSunscreen = createButton('Which type of Sunscreen?');
  WhichSunscreen.position(700,50);
  WhichSunscreen.size(300,50);

  EnterAnswer24 = createInput("Enter Answer Here");
  EnterAnswer24.position(displayWidth/2 - 100 , displayHeight/2 + 325);

  Physical = createButton('Physical');
  Physical.position(100,250);
  Physical.size(450,600);

  Chemical = createButton('Chemical');
  Chemical.position(1175,250);
  Chemical.size(450,600);

    Physical.mousePressed(()=>{
      WhichSunscreen.hide();
      Physical.hide();
      Chemical.hide();
      EnterAnswer24.hide();

      OxybenzoneFree = createButton('Which Object will you use?');
      OxybenzoneFree.position(700,50);
      OxybenzoneFree.size(300,50);

      EnterAnswer25 = createInput("Enter Answer Here");
      EnterAnswer25.position(displayWidth/2 - 100 , displayHeight/2 + 325);
  
      Hat = createButton('Hat');
      Hat.position(50,150);
      Hat.size(250,300);
       
      HatSunscreen = createButton('Hat (With Sunscreen)');
      HatSunscreen.position(500,150);
      HatSunscreen.size(250,300);

      Sunglasses = createButton('Sunglasses');
      Sunglasses.position(950,150);
      Sunglasses.size(250,300);
  
      SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
      SunglassesSunscreen.position(1400,150);
      SunglassesSunscreen.size(250,300);

      Umbrella = createButton('Umbrella');
      Umbrella.position(50,650);
      Umbrella.size(250,300);
  
      UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
      UmbrellaSunscreen.position(500,650);
      UmbrellaSunscreen.size(250,300);

      FullSleveDress = createButton('Full Sleve Dress');
      FullSleveDress.position(950,650);
      FullSleveDress.size(250,300);
  
      FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
      FullSleveDressSunscreen.position(1400,650);
      FullSleveDressSunscreen.size(250,300);
    })

    Chemical.mousePressed(()=>{
      WhichSunscreen.hide();
      Physical.hide();
      Chemical.hide();
      EnterAnswer24.hide();
  
      OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
      OxybenzoneFree.position(700,50);
      OxybenzoneFree.size(300,50);

      EnterAnswer26 = createInput("Enter Answer Here");
      EnterAnswer26.position(displayWidth/2 - 100 , displayHeight/2 + 325);
  
      Yes = createButton('Yes');
      Yes.position(100,250);
      Yes.size(450,600);
  
      No = createButton('No');
      No.position(1175,250);
      No.size(450,600);

        Yes.mousePressed(()=>{
          OxybenzoneFree.hide();
          Yes.hide();
          No.hide();
          EnterAnswer26.hide();
    
          AmountSprays = createButton('How Many Sprays will you use??');
          AmountSprays.position(700,50);
          AmountSprays.size(300,50);

          EnterAnswer27 = createInput("Enter Answer Here");
          EnterAnswer27.position(displayWidth/2 - 100 , displayHeight/2 + 325);
      
          Sprays1 = createButton('1 Spray');
          Sprays1.position(50,250);
          Sprays1.size(250,400);
      
          Sprays2 = createButton('2 Sprays');
          Sprays2.position(500,250);
          Sprays2.size(250,400);
    
          Sprays3 = createButton('3 Sprays');
          Sprays3.position(950,250);
          Sprays3.size(250,400);
      
          Sprays4 = createButton('4 Sprays');
          Sprays4.position(1400,250);
          Sprays4.size(250,400);
        })

        No.mousePressed(()=>{
          OxybenzoneFree.hide();
          Yes.hide();
          No.hide();
          EnterAnswer26.hide();
    
          AmountSprays = createButton('How Many Sprays will you use??');
          AmountSprays.position(700,50);
          AmountSprays.size(300,50);

          EnterAnswer29 = createInput("Enter Answer Here");
          EnterAnswer29.position(displayWidth/2 - 100 , displayHeight/2 + 325);
      
          Sprays1 = createButton('1 Spray');
          Sprays1.position(50,250);
          Sprays1.size(250,400);
      
          Sprays2 = createButton('2 Sprays');
          Sprays2.position(500,250);
          Sprays2.size(250,400);
    
          Sprays3 = createButton('3 Sprays');
          Sprays3.position(950,250);
          Sprays3.size(250,400);
      
          Sprays4 = createButton('4 Sprays');
          Sprays4.position(1400,250);
          Sprays4.size(250,400);
        })
  })
})

LakeRiver.mousePressed(()=>{
PickLocation.hide();
Beach.hide();
BathroomShower.hide();
LakeRiver.hide();
OceanSea.hide();

WhichSunscreen = createButton('Which type of Sunscreen?');
WhichSunscreen.position(700,50);
WhichSunscreen.size(300,50);

Physical = createButton('Physical');
Physical.position(100,250);
Physical.size(450,600);

Chemical = createButton('Chemical');
Chemical.position(1175,250);
Chemical.size(450,600);

  Physical.mousePressed(()=>{
    WhichSunscreen.hide();
    Physical.hide();
    Chemical.hide();

    OxybenzoneFree = createButton('Which Object will you use?');
    OxybenzoneFree.position(700,50);
    OxybenzoneFree.size(300,50);

    Hat = createButton('Hat');
    Hat.position(50,150);
    Hat.size(250,300);

    HatSunscreen = createButton('Hat (With Sunscreen)');
    HatSunscreen.position(500,150);
    HatSunscreen.size(250,300);

    Sunglasses = createButton('Sunglasses');
    Sunglasses.position(950,150);
    Sunglasses.size(250,300);

    SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
    SunglassesSunscreen.position(1400,150);
    SunglassesSunscreen.size(250,300);

    Umbrella = createButton('Umbrella');
    Umbrella.position(50,650);
    Umbrella.size(250,300);

    UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
    UmbrellaSunscreen.position(500,650);
    UmbrellaSunscreen.size(250,300);

    FullSleveDress = createButton('Full Sleve Dress');
    FullSleveDress.position(950,650);
    FullSleveDress.size(250,300);

    FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
    FullSleveDressSunscreen.position(1400,650);
    FullSleveDressSunscreen.size(250,300);
  })

  Chemical.mousePressed(()=>{
    WhichSunscreen.hide();
    Physical.hide();
    Chemical.hide();

    OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
    OxybenzoneFree.position(700,50);
    OxybenzoneFree.size(300,50);

    Yes = createButton('Yes');
    Yes.position(100,250);
    Yes.size(450,600);

    No = createButton('No');
    No.position(1175,250);
    No.size(450,600);

      Yes.mousePressed(()=>{
        OxybenzoneFree.hide();
        Yes.hide();
        No.hide();
  
        AmountSprays = createButton('How Many Sprays will you use??');
        AmountSprays.position(700,50);
        AmountSprays.size(300,50);
    
        Sprays1 = createButton('1 Spray');
        Sprays1.position(50,250);
        Sprays1.size(250,400);
    
        Sprays2 = createButton('2 Sprays');
        Sprays2.position(500,250);
        Sprays2.size(250,400);
  
        Sprays3 = createButton('3 Sprays');
        Sprays3.position(950,250);
        Sprays3.size(250,400);
    
        Sprays4 = createButton('4 Sprays');
        Sprays4.position(1400,250);
        Sprays4.size(250,400);
      })

      No.mousePressed(()=>{
        OxybenzoneFree.hide();
        Yes.hide();
        No.hide();
  
        AmountSprays = createButton('How Many Sprays will you use??');
        AmountSprays.position(700,50);
        AmountSprays.size(300,50);
    
        Sprays1 = createButton('1 Spray');
        Sprays1.position(50,250);
        Sprays1.size(250,400);
    
        Sprays2 = createButton('2 Sprays');
        Sprays2.position(500,250);
        Sprays2.size(250,400);
  
        Sprays3 = createButton('3 Sprays');
        Sprays3.position(950,250);
        Sprays3.size(250,400);
    
        Sprays4 = createButton('4 Sprays');
        Sprays4.position(1400,250);
        Sprays4.size(250,400);
      })
})
})

OceanSea.mousePressed(()=>{
PickLocation.hide();
Beach.hide();
BathroomShower.hide();
LakeRiver.hide();
OceanSea.hide();
EnterAnswer18.hide();

WhichSunscreen = createButton('Which type of Sunscreen?');
WhichSunscreen.position(700,50);
WhichSunscreen.size(300,50);

Physical = createButton('Physical');
Physical.position(100,250);
Physical.size(450,600);

Chemical = createButton('Chemical');
Chemical.position(1175,250);
Chemical.size(450,600);

Physical.mousePressed(()=>{
  WhichSunscreen.hide();
  Physical.hide();
  Chemical.hide();

  OxybenzoneFree = createButton('Which Object will you use?');
  OxybenzoneFree.position(700,50);
  OxybenzoneFree.size(300,50);

  Yes = createButton('Hat');
  Yes.position(50,150);
  Yes.size(250,300);

  No = createButton('Hat (With Sunscreen)');
  No.position(500,150);
  No.size(250,300);

  Sunglasses = createButton('Sunglasses');
  Sunglasses.position(950,150);
  Sunglasses.size(250,300);

  SunglassesSunscreen = createButton('Sunglasses (With Sunscreen)');
  SunglassesSunscreen.position(1400,150);
  SunglassesSunscreen.size(250,300);

  Umbrella = createButton('Umbrella');
  Umbrella.position(50,650);
  Umbrella.size(250,300);

  UmbrellaSunscreen = createButton('Umbrella (With Sunscreen)');
  UmbrellaSunscreen.position(500,650);
  UmbrellaSunscreen.size(250,300);

  FullSleveDress = createButton('Full Sleve Dress');
  FullSleveDress.position(950,650);
  FullSleveDress.size(250,300);

  FullSleveDressSunscreen = createButton('Full Sleve Dress (With Sunscreen)');
  FullSleveDressSunscreen.position(1400,650);
  FullSleveDressSunscreen.size(250,300);
})

Chemical.mousePressed(()=>{
  WhichSunscreen.hide();
  Physical.hide();
  Chemical.hide();

  OxybenzoneFree = createButton('Will you use Oxybenzone Free Sunscreen?');
  OxybenzoneFree.position(700,50);
  OxybenzoneFree.size(300,50);

  Yes = createButton('Yes');
  Yes.position(100,250);
  Yes.size(450,600);

  No = createButton('No');
  No.position(1175,250);
  No.size(450,600);

    Yes.mousePressed(()=>{
      OxybenzoneFree.hide();
      Yes.hide();
      No.hide();

      AmountSprays = createButton('How Many Sprays will you use??');
      AmountSprays.position(700,50);
      AmountSprays.size(300,50);
  
      Sprays1 = createButton('1 Spray');
      Sprays1.position(50,250);
      Sprays1.size(250,400);
  
      Sprays2 = createButton('2 Sprays');
      Sprays2.position(500,250);
      Sprays2.size(250,400);

      Sprays3 = createButton('3 Sprays');
      Sprays3.position(950,250);
      Sprays3.size(250,400);
  
      Sprays4 = createButton('4 Sprays');
      Sprays4.position(1400,250);
      Sprays4.size(250,400);
    })

    No.mousePressed(()=>{
      OxybenzoneFree.hide();
      Yes.hide();
      No.hide();

      AmountSprays = createButton('How Many Sprays will you use??');
      AmountSprays.position(700,50);
      AmountSprays.size(300,50);
  
      Sprays1 = createButton('1 Spray');
      Sprays1.position(50,250);
      Sprays1.size(250,400);
  
      Sprays2 = createButton('2 Sprays');
      Sprays2.position(500,250);
      Sprays2.size(250,400);

      Sprays3 = createButton('3 Sprays');
      Sprays3.position(950,250);
      Sprays3.size(250,400);
  
      Sprays4 = createButton('4 Sprays');
      Sprays4.position(1400,250);
      Sprays4.size(250,400);
})
})


})

})

});


hide();

drawSprites();
}

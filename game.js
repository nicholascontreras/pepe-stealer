Crafty.init(Crafty.viewport.width,Crafty.viewport.height, document.getElementById('game'));
var assets = {
	"sprites": {
		
		"img/(1).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe1: [0,0]
			}
		},
		"img/(2).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe2: [0,0]
			}
		},
		"img/(3).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe3: [0,0]
			}
		},
		"img/(4).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe4: [0,0]
			}
		},
		"img/(5).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe5: [0,0]
			}
		},
		"img/(6).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe6: [0,0]
			}
		},
		"img/(7).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe7: [0,0]
			}
		},
		"img/(8).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe8: [0,0]
			}
		},
		"img/(9).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe9: [0,0]
			}
		},
		"img/(10).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe10: [0,0]
			}
		},
		"img/(11).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe11: [0,0]
			}
		},
		"img/(12).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe12: [0,0]
			}
		},
		"img/(13).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe13: [0,0]
			}
		},
		"img/(14).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe14: [0,0]
			}
		},
		"img/(15).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe15: [0,0]
			}
		},
		"img/(16).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe16: [0,0]
			}
		},
		"img/(17).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe17: [0,0]
			}
		},
		"img/(18).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe18: [0,0]
			}
		},
		"img/(19).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe19: [0,0]
			}
		},
		"img/(20).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe20: [0,0]
			}
		},
		"img/(21).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe21: [0,0]
			}
		},
		"img/(22).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe22: [0,0]
			}
		},
		"img/(23).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe23: [0,0]
			}
		},
		"img/(24).png": {
			tile: 375,
			tileh: 360,
			map: {
				pepe24: [0,0]
			}
		},
		"img/robber.png": {
			tile: 56,
			tileh: 56,
			map: {
				robber: [0,0]
			}
		}
		

	}};

Crafty.load(assets, function(){});

var pepeCount = 0;
var manualRate = 1;
var clickedThief = false;
var thiefUnlocked = false;


var thiefCount = 0, shrekCount=0, opCount=0, cageCount=0, tysonCount=0, ninegagCount=0, redditCount=0, fourchanCount=0;
var esports = false, dewritos=false, gnome=false, secrets=false;
newPepe();

Crafty.e('2D, DOM, Color').attr({
	x: Crafty.viewport.width-(Crafty.viewport.width/3), y: 0,
	w: Crafty.viewport.width/3, h: Crafty.viewport.height-10
}).color('#63C914').css({
	"border": "1px solid black",
	"border-radius": "20px"
})
Crafty.e('2D, DOM, Text').attr({
	x: Crafty.viewport.width-(Crafty.viewport.width/4), y:0,
	w:(Crafty.viewport.width/3)
}).text("SHOPE").textFont({"size": "32px", "family": "Comic Sans MS"})
Crafty.e('2D, DOM, Image').attr({
	x: Crafty.viewport.width/2-600, y: 0,
}).image("img/title.png")

var collectionText = Crafty.e('2D, DOM, Text')
  .attr({
    x: 80,
    y: 150,
    w: 400
  });
 collectionText.text("<-- Pepe Collection")
 collectionText.textFont({
 	size: '24px',
 	family: "Comic Sans MS"
 })
 var pepeCountText = Crafty.e('2D, DOM, Text')
 	.attr({
 		x: Crafty.viewport.width/2-450,
 		y: 470,
 		w: 1000,
 		h: 200
 	})


 pepeCountText.text("Pepes Stolen: " + pepeCount);
 pepeCountText.textFont({
 	size: '24px',
 	family: 'Comic Sans MS'
 });

Crafty.c("shop-item", {});
Crafty.c("thief", {});
Crafty.e("2D, DOM, shop-item, thief").attr({
	x: Crafty.viewport.width-(Crafty.viewport.width/4)-20,
	y:70,
	w:150,
	h:130
})


function stealPepe (pepe) {
	pepeCount++;
	Crafty.e("2D, DOM, Text, Tween")
		.attr({
			x: (Crafty.viewport.width/2-200)+Math.floor((Math.random() * +50) -30), y: 300+Math.floor((Math.random() * +50) -30), w: 400, h: 250,
			rotation: Math.floor((Math.random() * +50) -30),
			alpha: 1.0
		})
		.text("+ " + manualRate + " pepe")
		.textFont({
			"size": "24px",
			"family": "Comic Sans MS"
		})
		.tween({alpha: 0.0}, 700)

	pepeCountText.text("Pepes Stolen: " + pepeCount);

	newPepe();
	pepe.bind("EnterFrame", function steal_animation() {
			if (pepe.x > -500){
				pepe.x = pepe.x-40;
				pepe.rotation = pepe.rotation+15;
				pepe.origin('center');
				pepe.w = pepe.w - 15;
				pepe.h = pepe.h - 15;
			}
			else
			{	
				pepe.unbind("EnterFrame", steal_animation);
				
			}	
	})

	if(pepeCount >= 30)
		unlockThief();

	
}

function newPepe() {
	Crafty.e("2D", "DOM", "pepe" + Math.floor((Math.random() * 24) + 1), "Mouse")
	.attr({x: Crafty.viewport.width/2-500, y: 200, w: 275, h: 260})
	.bind('Click', function(MouseEvent){
  	stealPepe(this);

});
}
function unlockThief() {

	$(".thief").css("background", "#99FFFF");
	$(".thief").on("click", function(){
		addThief();
	})
	clickedThief = false;

}	
var thiefOffset = 0;
function addThief() {
	if(pepeCount >= 30 && clickedThief == false)
	{
		pepeCount -= 30;
		clickedThief = true;
		if(pepeCount <= 30)
		{
			$(".thief").css("background", "#63C914");
			$(".thief").on("click", function(){
			
			})
		}

		Crafty.e("2D, DOM, robber, Tween")
		.attr({x: Crafty.viewport.w/2-500, y: 200+thiefOffset})
		.tween({x: 1000}, 1000);
		thiefOffset += 60;
	}

}
	
// setInterval(autoPepes, 1000);
// function autoPepes() {
// 	Crafty.e("2D", "DOM", "pepe" + Math.floor((Math.random() * 24) + 1), "Mouse")
// 	.attr({x: Crafty.viewport.width/2-500, y: 200, w: 275, h: 260})
// 	.bind('Click', function(MouseEvent){
//   	stealPepe(this);
// 	})
// }
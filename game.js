AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:'string', default:'#fish1'}
    },
    update:function(){
        this.isCollided(this.data.elementId)
    },
    isCollided:function(elementId){
    var element = document.querySelector(elementId)
    element.addEventListener("collide",e=>{
        if(elementId.includes("#fish")){
            console.log("fish Collision")
        }

    })
    }
    })
    
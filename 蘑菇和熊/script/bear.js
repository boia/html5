//С����
$(document).ready(function(){
	var Bear = function(){
		
		//�ܵ��ٶ�
		this.speedX = 2;
		this.speedY = 2;

		this.showWidth = 40;
		this.showHeight = 40;

		this.angle = 0;

		//С�ܵĳ�ʼ���꣬��̨����
		this.x = this.stage.width/2;
		this.y = this.stage.height/2+100;

		this.init();
		//this.rotate();
	};

	Bear.prototype = new boia.LivingThing(true,"images/bear_eyesclosed.png");

	//С����ת
	Bear.prototype.rotate = function(){
		this.stage.ctx.save();
		//��0,0���ƶ��ܵ�����
		this.stage.ctx.translate(this.x,this.y);
		this.stage.ctx.rotate(this.angle*Math.PI/180);
		this.draw(0,0);
		this.stage.ctx.restore();
	};

	//��ײ���
	Bear.prototype.checkTouch = function(ob,/*Optional*/sign){
		if((this.x+this.showWidth/2 > this.stage.width) || 
				(this.x-this.showWidth/2  < 0)){
			this.speedX *= -1;
		}
		if(this.y-this.showHeight/2 < 0){
			this.speedY *= -1;
		}
		if(this.y+this.showHeight/2 > this.stage.height){
			clearInterval(sign);
			
			this.x = this.stage.width/2;
			this.y = this.stage.height/2+100;	
			this.angle = 0;
			
			$("#start").show();
			//alert("Game Over");

			return true;   //�Ƿ�׹��
		}

		if(this.hitTestObject(ob)){
			this.speedY = -2;
			if(this.x > ob.x){
				this.speedX = 2;
			}else{
				this.speedX = -2;
			}
		}

		return false;
	};

	//����������Ƿ���ײ
	/*Bear.prototype.hitTestObject = function(ob){
		return	((this.x+this.showWidth/2) >= (ob.x-ob.showWidth/2)) &&
				((this.y+this.showHeight/2) >= (ob.y-ob.showHeight/2)) &&
				((ob.x+ob.showWidth/2) >= (this.x-this.showWidth/2)) ;
	};*/

	boia["Bear"] = Bear;
});
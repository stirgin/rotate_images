function rotateCat(){
  
  var _self = this;
  
  _self.cat = $('.block');
  _self.oldPhoto = 0;
  
  _self.getRandom = function(){
    var random = Math.floor(Math.random() * _self.cat.length);
    
    return random;
  };
  
  _self.rotate = function(){
    
    var newPhoto = _self.getRandom();
    if(_self.oldPhoto != newPhoto){
      _self.oldPhoto = newPhoto;
      setTimeout(function(){
        _self.cat.eq(newPhoto).addClass('_act').find('img');
        setTimeout(function(){
          _self.cat.removeClass('_act');
          _self.rotate();
        }, 2500);
      });
    } else {
      _self.rotate();
    }
  };
  
  _self.action = function(){
    _self.rotate();
  }();
  
  
}

var rotateCat = new rotateCat();
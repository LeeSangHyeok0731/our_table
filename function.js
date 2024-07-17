/*
const div1 = document.getElementById('editorChoice1');
const div2 = document.getElementById('editorChoice2');

let changePage = false;
  
function changeImg(){
  changePage = !changePage;
  if(changePage){
    div1.style.transform = 'translateX(-100%)';
    div2.style.transform = 'translateX(-100%)';
  }
  else{
    div1.style.transform = 'translateX(0)';
    div2.style.transform = 'translateX(0)';
  }
};





const store = document.getElementById('store');
const recipe = document.getElementById('recipe');
const guide = document.getElementById('guide');

const storeMenu = document.getElementById('storeMenu');

let storeColor = document.getElementById('store').style.color;
let recipeColor = document.getElementById('recipe').style.color;
let guideColor = document.getElementById('guide').style.color;

const storeHome = document.getElementById('storeHome');
const editorRecommend= document.getElementById('editorRecommend');
const limited = document.getElementById('limited');
const theBest = document.getElementById('theBest');
const newItem = document.getElementById('newItem');
const plan = document.getElementById('plan');
const brand = document.getElementById('brand');
const food = document.getElementById('food');
const kitchen = document.getElementById('kitchen');
const living = document.getElementById('living');
const homeApplication = document.getElementById('homeApplication');




let storeHomeColor = document.getElementById('storeHome').style.color;
let editorRecommendColor = document.getElementById('editorRecommend').style.color;
let limitedColor = document.getElementById('limited').style.color;
let theBestColor = document.getElementById('theBest').style.color;
let newItemColor = document.getElementById('newItem').style.color;
let planColor = document.getElementById('plan').style.color;
let brandColor = document.getElementById('brand').style.color;
let foodColor = document.getElementById('food').style.color;
let kitchenColor = document.getElementById('kitchen').style.color;
let livingColor = document.getElementById('living').style.color;
let homeApplicationColor = document.getElementById('homeApplication').style.color;



store.addEventListener('mouseover', (event) => {
    store.style.color = 'rgb(191, 145, 126)';
    storeMenu.style.display = 'block';
  }
);
store.addEventListener('mouseout', (event) => {
    store.style.color = storeColor;
  }
);
recipe.addEventListener('mouseover', (event) => {
    recipe.style.color = 'rgb(191, 145, 126)';
  }
);
recipe.addEventListener('mouseout', (event) => {
    recipe.style.color = recipeColor;
  }
);
guide.addEventListener('mouseover', (event) => {
    guide.style.color = 'rgb(191, 145, 126)';
  }
);
guide.addEventListener('mouseout', (event) => {
    guide.style.color = guideColor;
  }
);

storeHome.addEventListener('mouseover', (event) => {
  storeHome.style.color = 'rgb(246, 111, 88)';
}
);
storeHome.addEventListener('mouseout', (event) => {
  storeHome.style.color = storeHomeColor;
}
);

editorRecommend.addEventListener('mouseover', (event) => {
  editorRecommend.style.color = 'rgb(246, 111, 88)';
}
);
editorRecommend.addEventListener('mouseout', (event) => {
  editorRecommend.style.color = editorRecommendColor;
}
);

limited.addEventListener('mouseover', (event) => {
  limited.style.color = 'rgb(246, 111, 88)';
}
);
limited.addEventListener('mouseout', (event) => {
  limited.style.color = limitedColor;
}
);

theBest.addEventListener('mouseover', (event) => {
  theBest.style.color = 'rgb(246, 111, 88)';
}
);
theBest.addEventListener('mouseout', (event) => {
  theBest.style.color = theBestColor;
}
);

newItem.addEventListener('mouseover', (event) => {
  newItem.style.color = 'rgb(246, 111, 88)';
}
);
newItem.addEventListener('mouseout', (event) => {
  newItem.style.color = newItemColor;
}
);

plan.addEventListener('mouseover', (event) => {
  plan.style.color = 'rgb(246, 111, 88)';
}
);
plan.addEventListener('mouseout', (event) => {
  plan.style.color = planColor;
}
);

brand.addEventListener('mouseover', (event) => {
  brand.style.color = 'rgb(246, 111, 88)';
}
);
brand.addEventListener('mouseout', (event) => {
  brand.style.color = brandColor;
}
);

food.addEventListener('mouseover', (event) => {
  food.style.color = 'rgb(246, 111, 88)';
}
);
food.addEventListener('mouseout', (event) => {
  food.style.color = foodColor;
}
);

kitchen.addEventListener('mouseover', (event) => {
  kitchen.style.color = 'rgb(246, 111, 88)';
}
);
kitchen.addEventListener('mouseout', (event) => {
 kitchen.style.color = kitchenColor;
}
);

living.addEventListener('mouseover', (event) => {
  living.style.color = 'rgb(246, 111, 88)';
}
);
living.addEventListener('mouseout', (event) => {
  living.style.color = livingColor;
}
);

homeApplication.addEventListener('mouseover', (event) => {
  homeApplication.style.color = 'rgb(246, 111, 88)';
}
);
homeApplication.addEventListener('mouseout', (event) => {
  homeApplication.style.color = homeApplicationColor;
}
);


storeMenu.addEventListener('mouseover', (event) => {
    storeMenu.style.display = 'block';
}
);
storeMenu.addEventListener('mouseout', (event) => {
    storeMenu.style.display = 'none';
}
);*/
const div1 = document.getElementById('editorChoice1');
const div2 = document.getElementById('editorChoice2');

let changePage = false;
  
function changeImg() {
  changePage = !changePage;
  const translateValue = changePage ? '-100%' : '0';
  div1.style.transform = `translateX(${translateValue})`;
  div2.style.transform = `translateX(${translateValue})`;
  if(changePage){
    document.getElementById('choice1').style.background = 'gainsboro';
    document.getElementById('choice2').style.background = 'red';
  }
  else{
    document.getElementById('choice1').style.background = 'red';
    document.getElementById('choice2').style.background = 'gainsboro';
  }
}

const elements = [
  { id: 'store', hoverColor: 'rgb(191, 145, 126)' },
  { id: 'recipe', hoverColor: 'rgb(191, 145, 126)' },
  { id: 'guide', hoverColor: 'rgb(191, 145, 126)' },
  { id: 'storeHome', hoverColor: 'rgb(246, 111, 88)' },
  { id: 'editorRecommend', hoverColor: 'rgb(246, 111, 88)' },
  { id: 'limited', hoverColor: 'rgb(246, 111, 88)' },
  { id: 'theBest', hoverColor: 'rgb(246, 111, 88)' },
  { id: 'newItem', hoverColor: 'rgb(246, 111, 88)' },
  { id: 'plan', hoverColor: 'rgb(246, 111, 88)' },
  { id: 'brand', hoverColor: 'rgb(246, 111, 88)' },
  { id: 'food', hoverColor: 'rgb(246, 111, 88)' },
  { id: 'kitchen', hoverColor: 'rgb(246, 111, 88)' },
  { id: 'living', hoverColor: 'rgb(246, 111, 88)' },
  { id: 'homeApplication', hoverColor: 'rgb(246, 111, 88)' },
];

elements.forEach(({ id, hoverColor }) => {
  const element = document.getElementById(id);
  const originalColor = element.style.color;

  element.addEventListener('mouseover', () => {
    element.style.color = hoverColor;
  });

  element.addEventListener('mouseout', () => {
    element.style.color = originalColor;
  });
});

const storeMenu = document.getElementById('storeMenu');
const store = document.getElementById('store');

store.addEventListener('mouseover', () => {
  store.style.color = 'rgb(191, 145, 126)';
  storeMenu.style.display = 'block';
});

store.addEventListener('mouseout', () => {
  store.style.color = storeColor;
  storeMenu.style.display = 'none';
});

storeMenu.addEventListener('mouseover', () => {
  storeMenu.style.display = 'block';
});

storeMenu.addEventListener('mouseout', () => {
  storeMenu.style.display = 'none';
});






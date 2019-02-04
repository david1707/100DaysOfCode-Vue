<template>
  <div class="volunteering">
    <img src="https://c.pxhere.com/photos/0f/1f/cat_thai_cat_cats_pet_animals_cute_cat_s_eye_cat_eyes-703574.jpg!d" alt="">

    <!-- First block of text -->
    <div class="container">
      <div class="row">
        <h3 >Why volunteer?</h3>  
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur pariatur quasi, provident, natus labore, perferendis eveniet repellat cumque maiores deleniti quam. Eligendi quia repellendus optio nulla tempora libero nostrum, reprehenderit quae, explicabo maiores corrupti pariatur sit cumque quibusdam deserunt!</p>
        <p>Adipisci omnis nobis inventore quidem dolor vero. Distinctio assumenda repudiandae illum molestiae velit nostrum voluptas vel ex libero, commodi cum delectus similique deleniti iusto amet ad. Cum earum accusamus fugit sit? Facere illum, debitis fugiat molestiae adipisci suscipit harum neque.</p>
        <p>Quisquam ducimus rerum dignissimos aperiam, mollitia magnam id inventore, qui ex eius nesciunt asperiores ipsum maxime facere. Eius doloremque praesentium eum dolores omnis esse earum nostrum nulla qui voluptate! Delectus nesciunt ipsa alias deserunt ratione pariatur nisi ab maxime a.</p>
        <p>Itaque inventore, provident consequuntur nesciunt unde tenetur eveniet? Suscipit mollitia officia vel delectus? Quas, amet adipisci ex excepturi consequatur ullam assumenda quasi. Eos id numquam perferendis autem minus facere labore velit fugiat deserunt nemo expedita culpa, omnis dolore voluptatem esse!</p>
        <p>Dolore, aperiam, ipsum corrupti ex nisi doloremque culpa consequuntur perferendis, officiis eum quam! Quis ratione maiores est. Excepturi dolor corrupti et quaerat aut culpa, cum obcaecati architecto exercitationem repellat eveniet suscipit nesciunt accusamus expedita numquam laborum sunt placeat asperiores facilis.</p>
      </div>
      <div class="row">
        <h3>What we have achieved:</h3>  
          <ul class="collection">
            <li class="collection-item"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat<a href="#!" class="secondary-content"><i class="material-icons">accessible</i></a></div></li>
            <li class="collection-item"><div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, ab.<a href="#!" class="secondary-content"><i class="material-icons">favorite</i></a></div></li>
            <li class="collection-item"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, laborum<a href="#!" class="secondary-content"><i class="material-icons">supervisor_account</i></a></div></li>
            <li class="collection-item"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos!<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a></div></li>
            <li class="collection-item"><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, adipisci!<a href="#!" class="secondary-content"><i class="material-icons">visibility</i></a></div></li>
          </ul>
      </div>
    </div><!-- ./First block of text -->

    <img src="https://c.pxhere.com/photos/d7/d9/dogs_kids_children_seecanyon-242466.jpg!d" alt="">

    <div class="container">
      <div class="row">
        <h3 >Your life as a volunteer</h3>
          <ul class="collection">
            <li class="collection-item"><div> Lorem ipsum, dolor sit amet consectetur adipisicing elit: <a href="#!" class="secondary-content"></a></div></li>
            <li class="collection-item"><div> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eveniet aspernatur praesentium tempora odit illum atque rem, nostrum aliquid deserunt ratione eos exercitationem. <a href="#!" class="secondary-content"></a></div></li>
            <li class="collection-item"><div> - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod est suscipit dolorum rerum sed deserunt nihil nemo iure, nulla, quibusdam numquam. Dolor blanditiis, velit expedita quasi dolore reiciendis ut tenetur doloribus. Veniam! <a href="#!" class="secondary-content"></a></div></li>
            <li class="collection-item"><div> - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sunt maiores tempore nesciunt dignissimos at eveniet obcaecati inventore facilis, in, vel ducimus quae adipisci quibusdam quas repudiandae a ut placeat temporibus. Culpa molestias vitae sapiente nisi, deleniti nihil voluptatibus est? <a href="#!" class="secondary-content"></a></div></li>
            <li class="collection-item"><div> - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quibusdam qui aliquid natus nostrum quam beatae voluptas consequuntur quisquam omnis distinctio, quod quasi ea velit et corrupti aperiam! <a href="#!" class="secondary-content"></a></div></li>
            <li class="collection-item"><div> - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia modi consectetur sunt minus! <a href="#!" class="secondary-content"></a></div></li>
          </ul>
      </div>
      <br>
      <div class="row">
        <h3>Join us and help us to help!</h3>  
        <br>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate">
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate">
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="birthdate" type="text" class="datepicker">
              <label for="birthdate">Birthdate</label>
            </div>
            <div class="input-field col s6">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
          </div>
        </form>
      </div>
    </div><!-- ./First block of text -->


  </div>
</template>

<script>
export default {
  name: 'volunteering',
}
</script>

<style lang="scss">
  .volunteering > img {
    width: 100vw;
    height: 99vh;
  }

  ul.collection {
    border: 0px;

    .collection-item { 
      border: 0px;
    }
  }
</style>


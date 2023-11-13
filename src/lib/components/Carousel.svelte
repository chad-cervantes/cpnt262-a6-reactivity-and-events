<script>
  // slide array to loop through
const soccerPlayerArr = ["Mohamed Salah", "Virgil Van Dijk", "Andy Robertson", "Allison Becker", "Erling Haaland", "Marcus Rashford", "Kylian Mbappe", "Cristiano Ronaldo", "Lionel Messi", "Kevin De Bryne", "Kaoru Mitoma", "Harry Kane", "Heung-Min Son", "Robert Lewandoski", "Latauro Martinez", "Romelu Lukaku", "Darwin Nunez", "Jude Bellingham", "Neymar", "Raheem Sterling", "Vinicius Jr", "Ilkay Gundogan", "Sadio Mane"];


// current index counter
let currentSlideIndex = 0;


let currentSlideContent = soccerPlayerArr[0];


// the max length of the array
const maxLength = soccerPlayerArr.length - 1;

// next function
function nextSlide() {
  if (currentSlideIndex === maxLength) {
    currentSlideIndex = 0;
    currentSlideContent = soccerPlayerArr[currentSlideIndex];
  } else {
    currentSlideIndex++;
    currentSlideContent = soccerPlayerArr[currentSlideIndex];
  }
}


// previous function
function prevSlide() {
  if (currentSlideIndex === 0) {
    currentSlideIndex = maxLength;
    currentSlideContent = soccerPlayerArr[currentSlideIndex]
  } else {
    currentSlideIndex--;
    currentSlideContent = soccerPlayerArr[currentSlideIndex];
  }
}

</script>

<!--Making of carousel slide-->
<section>
  <h2 class="text-center">{currentSlideIndex}: {currentSlideContent}</h2>
  <div class="flex justify-center p-4 gap-4">
    <button on:click={prevSlide} class="rounded-md bg-orange-300 px-4 py-2" id="prev-slide">Previous</button>
    <button on:click={nextSlide} class="rounded-md bg-orange-300 px-4 py-2" id="next-slide">Next</button>
  </div>
</section>

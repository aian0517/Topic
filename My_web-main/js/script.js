// <!-----------------------main Start--------------------------------->
var flag = "";
var flag2 = 1;
const root = document.querySelector(":root");
let oldTop = 0;
window.onscroll = () => {
  var nowTop = document.documentElement.scrollTop;
  if (nowTop > oldTop) {
    document.querySelector("nav").classList.add("nav_active");
  } else {
    document.querySelector("nav").classList.remove("nav_active");
  }
  oldTop = nowTop;
};

// <!-----------------------Vue Start--------------------------------->
const app = Vue.createApp({
  data() {
    return {
      text_h: "",
      text_content: "",
      Lsum: 0,
      select_value: "Fat reduction series",
      product_ary: [],
      datas: [
        {
          id: 1,
          img: "./images/image1.png",
          h: "Low carbon bento design competition",
          content: `
          Boss Zhang hopes to let more young people know the importance of health, and has promoted low-carbon lunch boxes, but after eating for a long time, you will want to change to other foods,
          it is better to make a low-carbon bento box with your own hands, not only can you better understand low-carbon knowledge,
           but also eat healthy We introduce low-carbon carbon design competition to understand the taste of young people now,
           Homemade low-carbon bento ~ Please make a low-carbon bento by yourself, and put food Uploading pictures of materials and finished products, 
           filling in the ingredients, how many grams used, and the carbon emissions of the ingredients, the production process can not only be understood Low-carbon knowledge, 
           you can also eat healthy, please actively participate.
          <a href="./file/創意低碳便當設計.docx" download>Click here to download the registration form</a>
                        `,
        },
        {
          id: 2,
          img: "./images/image2.png",
          h: "The battle to reduce carbon emissions!",
          content: `
          We also designed a fun platformer called Carbon Reduction Battle. The content of the game is mainly based on the player controlling the character to dodge High-carbon food eats low-carbon food, 
          and the way players play the game allows players to understand what is low-carbon food and what is high-carbon food.
          <a href='https://reurl.cc/MR5yM4' target="_blank">The battle to reduce carbon emissions</a>
                    `,
        },
        {
          id: 3,
          img: "./images/image3.png",
          h: "Carbon Computing APP wireless version",
          content: `
          In order to make it easy for us to know how much carbon footprint our meal contains, we made a carbon calculation app that can enter the number of grams to obtain the carbon footprint. 
          You might think that there is not a carbon computer on the website? 
          However, this one can be used without the Internet<b>「Carbon reduction calculation APP wireless version!」</b>
            Simply click on the link below to download
                    <a href='./file/carbon.apk' download>Click me to download the wireless version of the carbon reduction calculation APP</a>
                    `,
        },
        {
          id: 4,
          img: "./images/image4.png",
          h: "AI carbon reduction camera",
          content: `
          If you are a person who does not want to check the carbon emissions of food by yourself and the mobile phone has not downloaded the wireless version of the carbon reduction calculation APP, we strongly recommend this "AI carbon reduction camera"!, 
          The AI part is mainly used by a software on the network to teachable software,you can generate a model by uploading an image, and you can use the website's camera Come and identify what kind of food it is.
                    <a href='https://reurl.cc/EGl1mR' target="_blank">Click me to go to AI carbon reduction camera</a>
                    `,
        },
        {
          id: 5,
          img: "./images/image5.png",
          h: "LINE stickers",
          content: `
          In order to call on more people to reduce carbon emissions in daily life, we have designed cute animal LINE stickers,
           you can go to the LINE sticker shop to have a look! Just search for "carbon reduction" in LINE's official sticker shop,
            and you can see our cute animal LINE sticker!
                    <a href='https://store.line.me/stickershop/product/22416348/zh-Hant' target="_blank">Click me to go to the LINE sticker to reduce carbon animals</a>
                    `,
        },
        {
          id: 6,
          img: "./images/image6.png",
          h: "Youtube carbon reduction short video",
          content: `
          One carbon emission per day, follow us!
                    <a href='https://www.youtube.com/channel/UCJ4fkI6ROczj_rj7TCehpWQ' target="_blank">Click me to go to our Youtube website</a>
                    `,
        },
      ],
      shopingCart_toggle_img: "<i class='bi bi-cart4'></i>",
      select_container: ["Fat reduction series", "Muscle gain series", "Luxury series"],
      products: [
        {
          // 減脂系列
          img: "./images/元氣滿滿雞肉餐.jpg",
          name: "Low-fat abundant chicken meal",
          price: 130,
          amount: 0,
          product_class: "Fat reduction series",
          carbon_content: "poultry 6kg/1kg",
        },
        {
          img: "./images/元氣滿滿豬肉餐.jpg",
          name: "Low-fat abundant pork meal",
          price: 130,
          amount: 0,
          product_class: "Fat reduction series",
          carbon_content: "pork 7kg/1kg",
        },
        {
          img: "./images/元氣滿滿魚肉餐.jpg",
          name: "Low-fat abundant fish meal",
          price: 130,
          amount: 0,
          product_class: "Fat reduction series",
          carbon_content: "fish meat 5kg/1kg",
        },
        {
          img: "./images/元氣滿滿烤鯖魚.jpg",
          name: "Low-fat abundant Grilled mackerel meal",
          price: 150,
          amount: 0,
          product_class: "Fat reduction series",
          carbon_content: "fish meat 5kg/1kg",
        },
        {
          img: "./images/元氣滿滿泡菜豬.jpg",
          name: "Low-fat abundant spicy pickled pork meal",
          price: 150,
          amount: 0,
          product_class: "Fat reduction series",
          carbon_content: "pork 7kg/1kg",
        },
        {
          img: "./images/元氣滿滿牛肉餐.jpg",
          name: "Low-fat abundant beef meal",
          price: 160,
          amount: 0,
          product_class: "Fat reduction series",
          carbon_content: "beef 60kg/1kg",
        },
        {
          // 增肌系列
          img: "./images/元氣滿滿雞肉餐.jpg",
          name: "Muscle-building abundant chicken meal",
          price: 150,
          amount: 0,
          product_class: "Muscle gain series",
          carbon_content: "poultry 6kg/1kg",
        },
        {
          img: "./images/元氣滿滿豬肉餐.jpg",
          name: "Muscle-building abundant pork meal",
          price: 150,
          amount: 0,
          product_class: "Muscle gain series",
          carbon_content: "pork 7kg/1kg",
        },
        {
          img: "./images/元氣滿滿魚肉餐.jpg",
          name: "Muscle-building abundant fish meal",
          price: 150,
          amount: 0,
          product_class: "Muscle gain series",
          carbon_content: "fish meat 5kg/1kg",
        },
        {
          img: "./images/元氣滿滿烤鯖魚.jpg",
          name: "Muscle-building abundant grilled mackerel meal",
          price: 170,
          amount: 0,
          product_class: "Muscle gain series",
          carbon_content: "fish meat 5kg/1kg",
        },
        {
          img: "./images/元氣滿滿牛肉餐.jpg",
          name: "Muscle-building abundant beef meal",
          price: 180,
          amount: 0,
          product_class: "Muscle gain series",
          carbon_content: "beef 60kg/1kg",
        },
        {
          // 豪華系列
          img: "./images/元氣滿滿烤鮭魚.jpg",
          name: "Luxurious and abundant grilled salmon meal",
          price: 180,
          amount: 0,
          product_class: "Luxury series",
          carbon_content: "fish meat 5kg/1kg",
        },
        {
          img: "./images/元氣滿滿松阪豬.jpg",
          name: "Luxurious and abundant Matsusaka pork meal",
          price: 180,
          amount: 0,
          product_class: "Luxury series",
          carbon_content: "pork 7kg/1kg",
        },
      ],
      slide_id: 0,
      slide: [
        {
          title: "碳中和",
          english: "Carbon Neutralp",
          content: `
                  Carbon neutrality refers to the state where the total amount of CO2 emissions generated by a company, 
                  organization, or government during a specific period is offset and cleared by the accumulated reduction in emissions through measures such as the use of renewable energy.
                  It differs from net-zero emissions, which emphasizes achieving a balance between greenhouse gas emissions and carbon removal. Carbon neutrality implies a state where there is no increase or decrease in emissions,
                  resulting in a balanced carbon footprint.                
                  `,
          color: "#7da9d5d9",
          class: "btn-outline-danger",
        },
        {
          title: "淨零排放",
          english: "Net Zero",
          content: `Net-zero emissions referto the total amount of greenhouse gas emissions caused by human activities during a specific period, where the emissions are offset to an extent that they effectively become zero.
                    This means that efforts are made to minimize human-caused emissions rather than completely eliminating them. To achieve net-zero emissions, many governments and businesses employ carbon capture and storage (CCS), carbon capture, utilization, and storage (CCUS), as well as natural carbon sinks (such as forests and ocean absorption) to offset carbon emissions. These techniques aim to counterbalance the emissions and achieve a state where the net emissions are effectively reduced to zero.
                    `,
          color: "#c3c076",
          class: "btn-outline-success",
        },
        {
          title: "台灣的淨零碳排政策",
          english: "zero carbon",
          content: `
          On March 30, 2022, with great anticipation, the National Development Council under the Executive Yuan of the government announced the "2050 Net-Zero Emission Pathway and Strategy." The plan includes allocating a budget of 900 billion NT dollars before 2030 to implement four major transformation strategies: energy, industry, lifestyle, and society. Additionally, it focuses on two governance foundations: technology research and development and climate governance. These initiatives will be supported by 12 key strategies, aiming to synchronize with the world in achieving the net-zero emissions goal by 2050.
          `,
          color: "#d3a5a5",
          class: "btn-outline-info",
        },
        {
          title: "低碳飲食",
          english: "Low Carb Diet",
          content: `Carbon diet, also known as low-carbohydrate diet or low-carb diet, refers to reducing the intake of carbohydrates in daily meals while increasing the proportion of protein, fats, and fiber.
                    The term "low-carb diet" signifies a dietary approach that aims to lower carbohydrate, i.e., sugar, consumption and emphasizes the intake of natural proteins and healthy fats. In recent years, low-carb diets have gained popularity. Unlike strict ketogenic diets, they do not require precise calorie counting and offer more flexibility as a simpler approach to weight loss.
                  `,
          color: "#b1aacb",
          class: "btn-outline-info",
        },
      ],
      computer_now: "first",
      computers: [
        {
          name: "Wheat and rye",
          carbon: 14,
          amount: "",
          class: "first",
        },
        {
          name: "Corn",
          carbon: 1,
          amount: "",
          class: "first",
        },
        {
          name: "Rice",
          carbon: 4,
          amount: "",
          class: "first",
        },
        {
          name: "Cassava",
          carbon: 1,
          amount: "",
          class: "first",
        },
        {
          name: "Beef",
          carbon: 60,
          amount: "",
          class: "second",
        },
        {
          name: "mutton",
          carbon: 24,
          amount: "",
          class: "second",
        },
        {
          name: "shrimp",
          carbon: 12,
          amount: "",
          class: "second",
        },
        {
          name: "pork",
          carbon: 7,
          amount: "",
          class: "second",
        },
        {
          name: "poultry",
          carbon: 6,
          amount: "",
          class: "second",
        },
        {
          name: "fish meat",
          carbon: 3,
          amount: "",
          class: "second",
        },
        {
          name: "egg",
          carbon: 4.5,
          amount: "",
          class: "second",
        },
        {
          name: "soy milk",
          carbon: 0.9,
          amount: "",
          class: "second",
        },
        {
          name: "root vegetables",
          carbon: 0.4,
          amount: "",
          class: "third",
        },
        {
          name: "carrot",
          carbon: 0.8,
          amount: "",
          class: "third",
        },
        {
          name: "pea",
          carbon: 0.9,
          amount: "",
          class: "third",
        },
        {
          name: "black fungus",
          carbon: 1.25,
          amount: "",
          class: "third",
        },
        {
          name: "Summer Snow Mushroom",
          carbon: 1.25,
          amount: "",
          class: "third",
        },
        {
          name: "Pleurotus eryngii",
          carbon: 1,
          amount: "",
          class: "third",
        },
        {
          name: "Abalone Mushroom",
          carbon: 1,
          amount: "",
          class: "third",
        },
        {
          name: "tomato",
          carbon: 14,
          amount: "",
          class: "fourth",
        },
        {
          name: "banana",
          carbon: 0.7,
          amount: "",
          class: "fourth",
        },
        {
          name: "apple",
          carbon: 0.4,
          amount: "",
          class: "fourth",
        },
        {
          name: "citrus fruit",
          carbon: 0.3,
          amount: "",
          class: "fourth",
        },
        {
          name: "cheese",
          carbon: 21,
          amount: "",
          class: "fifth",
        },
        {
          name: "milk",
          carbon: 3,
          amount: "",
          class: "fifth",
        },
        {
          name: "peanut",
          carbon: 25,
          amount: "",
          class: "sixth",
        },
        {
          name: "olive oil",
          carbon: 6,
          amount: "",
          class: "sixth",
        },
        {
          name: "palm oil",
          carbon: 8,
          amount: "",
          class: "sixth",
        },
        {
          name: "nut",
          carbon: 0.3,
          amount: "",
          class: "sixth",
        },
        {
          name: "coffee",
          carbon: 0.4,
          amount: "",
          class: "sixth",
        },
      ],
      information: [
        {
          title: "Age group",
          english: "年齡層的影響",
          content:
            // "年齡層一般女生會多於男生，年齡層的話大概都是普遍上班族，像以年輕人的角度來講吃的口味一般就會比較重，所以比較容易乎略飲食的均衡問題，低碳餐飲客的喜愛度會很高，固定的客源，回頭客回頭率很高。",
            "In general, there are more females than males, and they are typically office workers. They tend to have a preference for strong flavors and often overlook the issue of balanced diet. Low-carbonated beverages are highly popular among them, with a consistent customer base and a high repurchase rate.",
        },
        {
          title: "Price",
          english: "價格方面",
          content:
            // "明明健康餐的東西既不調味又不油炸，為什麼這麼貴，像是低碳飲食類的東西，其實這些飲食他會變貴是有一個有個很大的原因就是食材的新鮮度、而且沒有調味食材就要更新鮮，才會讓人覺得好吃。",
            "Healthy meals are indeed not seasoned or deep-fried, but they can still be expensive due to the freshness of the ingredients. Without seasoning, the quality of the ingredients becomes even more crucial to ensure a flavorful taste.",
        },
        {
          title: "Origin",
          english: "食物的出產地",
          content:
            // "我們都採用在地的新鮮食材，我們家的豬肉吃起來是沒有腥味的那種，我們的活菌豬吃的飼料跟一般的不一樣，這也就是我們低碳便當會比一般便當貴的原因，想要健康又想要好吃，食材就要新鮮，選擇在地的食材。",
            "We use locally sourced fresh ingredients, and our pork doesn't have any gamey taste. The feed given to our live probiotic-fed pigs is different, which contributes to the higher cost of our meal boxes. If you want a healthy and delicious meal, it's essential to have fresh and locally sourced ingredients.",
        },
      ],

      test_change: 0,
      sorts: ["A", "B", "C", "D"],
      ans: ["@", "C", "A", "B", "D", "A"],
      tests: [
        {
          title:
            '<h1 style="font-weight:800;color:#0fd9b6;"><i class="bi bi-controller"></i>Carbon Reduction Knowledge Master</h1> ',
          question: "",
          options: [],
          user: "",
          show: true,
        },
        {
          title: "carbon neutrality",
          question:
            // "什麼是碳中和（carbon neutral）？",
            "What is carbon neutrality？",
          options: [
            // "鹼性和酸性飲料加在一起的過程",
            // "碳治狼自創的呼吸法",
            // "經過低碳能源、植樹等消除二氧化碳的方式正負抵消",
            // "以上接是",
            "The process of combining alkaline and acidic drinks together",
            "Carbon Wolf's Self-created Breathing Technique",
            "Offsetting carbon dioxide through methods such as low-carbon energy sources and tree planting, achieving a balance between positive and negative emissions",
            "All of the above are correct",
          ],
          user: "",
          show: true,
        },
        {
          title: "Low-carb diet（１）",
          question:
            // "低碳飲食全名為「 」，也稱作「 」？<br>請在「 」填入正確的字詞。",
            "The full name of 低碳飲食 in English is _______ , It is also referred to as __________. Please fill in the correct answer.",
          options: [
            // "低碳水化合物飲食，低醣飲食",
            // "飢不擇食，暴飲暴食",
            // "生酮飲食，阿金飲食",
            // "對食，日蝕",
            "Low-carbohydrate diet ,  Low-carb diet",
            "Eating indiscriminately due to hunger,  binge eating",
            "Ketogenic Diet，Ah Kin Diet",
            "Low carbon drinking water compound，Low-sugar Diet",
          ],
          user: "",
          show: true,
        },
        {
          title: "Low-carb diet（２）",
          question:
            // "「 」近年來很熱門，它沒有生酮飲食嚴格、也不需要精確計算熱量，是比較彈性、簡單的減重方式。<br>請在「 」填入正確的字詞。",
            "What is a popular weight-loss approach in recent years that is less strict than the ketogenic diet, doesn't require precise calorie counting, and is more flexible and straightforward?",
          options: ["Regional diet ", "Low-carbon diet", "Ornish diet", "Mediterranean diet"],
          user: "",
          show: true,
        },
        {
          title: "Carbon ranking of food（１）",
          question:
            // "請選出以下碳排量最高的食物？",
            "What is the food with the highest carbon emissions?",
          options: ["Coffee", "Pineapple shakya", "Chinese flowering cabbage", "Beef"],
          user: "",
          show: true,
        },
        {
          title: "Carbon ranking of food（２）",
          question:
            // "請選出以下碳排量最低的食物？",
            "What is the food with the lowest carbon emissions?",
          options: ["Nuts", "Mutton", "Fish", "Chocolate"],
          user: "",
          show: true,
        },
      ],
      userName: "",
      userGmail: "",
      usercontent: "",
    };
  },
  computed: {
    carbon_sum() {
      let compute_total = 0;
      this.computers.forEach((computer) => {
        compute_total += computer.amount * computer.carbon;
      });
      compute_total =
        compute_total != 0 ? `Total carbon emissions:${compute_total.toFixed(1)}g` : "";
      return compute_total;
    },
    test_result() {
      let test_total = 0;
      const fraction = 100 / (this.tests.length - 1);
      // console.log(this.tests);
      this.tests.forEach((test, i) => {
        test_total += test.user === this.ans[i] ? fraction : 0;
      });
      return test_total.toFixed(1);
    },
  },
  methods: {
    fs_click_modalMoveTop(idx) {
      // console.log(idx);
      const modalBody = document.querySelector(".modal-body");
      modalBody.classList.toggle("active");
      modalBody.scrollTop = 0;

      if (flag == "") {
        flag = idx;
        //取root裡的--MoreNews_container_height
        MoreNews_container_height = getComputedStyle(root)
          .getPropertyValue("--MoreNews_container_height")
          .slice(0, -2);
        // slice(start,end) 取字串某個部分
        root.style.setProperty(
          "--move",
          `${((idx - 1) * MoreNews_container_height + 10 * (idx - 1)) * -1}px`
        );

        document.getElementById(idx).classList.toggle("top_title_modal");
        document
          .querySelector(".MoreNews_content")
          .classList.toggle("MoreNews_content_active");
        fs_Lopacty(0);

        function fs_Lopacty(Lstart) {
          document.querySelector(".MoreNews_content").style.opacity = Lstart;
          setTimeout(() => {
            if (Lstart < 1) fs_Lopacty(Lstart + 0.1);
          }, 30);
        }
        // 更改Content內容裡的文字
        this.text_h = this.datas[idx - 1].h;
        this.text_content =
          this.datas[idx - 1].content +
          ` <button type="button" class="btn btn-secondary">Close</button>`;
      } else if (flag == idx || idx == "close") {
        fs_transition(flag);
      }

      function fs_transition(idx) {
        document.getElementById(idx).classList.toggle("top_title_modal");
        document
          .querySelector(".MoreNews_content")
          .classList.toggle("MoreNews_content_active");
        document.querySelector(".MoreNews_content").style.opacity = 0;
        flag = "";
      }
    },
    fs_submit() {
      let total = 0;
      this.products.forEach((product) => {
        total += product.price * product.amount;
        product.amount = 0;
      });
      alert("Thank you very much for your order!\rtotal:" + total);
      total = 0;
      this.Lsum = 0;
    },
    fs_updateValue(product, amount) {
      if (flag2 == 1) {
        this.$refs.sum_box.classList.toggle("sum_box_active");
        document
          .querySelector(".shopingCart_toggle")
          .classList.toggle("shopingCart_toggle_active");
        this.shopingCart_toggle_img =
          '<i class="bi bi-arrow-left-square-fill"></i>';
        flag2++;
      }
      if (amount < 0) return;
      product.amount = amount;
      let total = 0;
      this.products.forEach((product) => {
        total += product.price * product.amount;
      });
      this.Lsum = total;
    },
    fs_shopingCartToggle() {
      document.querySelector(".sum_box").classList.toggle("sum_box_active");
      document
        .querySelector(".shopingCart_toggle")
        .classList.toggle("shopingCart_toggle_active");
      if (flag2 % 2 == 0) {
        this.shopingCart_toggle_img = "<i class='bi bi-cart4'></i>";
      } else {
        this.shopingCart_toggle_img =
          '<i class="bi bi-arrow-left-square-fill"></i>';
      }
      flag2++;
    },
    fs_gameAgain() {
      this.test_change = 0;
      this.tests.forEach((test) => {
        test.show = true;
        test.user = "";
      });
    },
    fs_footerSubmit() {
      if (
        this.userName != "" &&
        this.userGmail != "" &&
        this.usercontent != ""
      ) {
        this.userName = this.userGmail = this.usercontent = "";
        alert("我們己經接收到您的留言!\r");
      } else {
        console.log("請填完整填寫資料");
      }
    },
  },
}).mount("#app");
// <!--------------------------------------------------------main End-------------------------------------------------------->

// <!--------------------------------------------------------chart Start-------------------------------------------------------->
Chart.defaults.font.size = 18;

var chart = new Chart(document.getElementById("myChart"), {
  type: "polarArea",
  data: {
    labels: [
      "Pork chop bento",
      "Low-carbon Matsusaka pork meal",
      "Low-carbon grilled mackerel meal",
      "Low-fat abundant fish meal",
      "Chicken leg bento",
      "Low-fat abundant chicken meal",
    ],
    datasets: [
      {
        data: [17, 14, 21, 13, 18, 17],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 3,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
});
// <!--------------------------------------------------------chart End-------------------------------------------------------->

<template>
  <img :src="imagePath" class="link-button theme-button" @click="toggleTheme" />
  <div class="portfolio">
    <div class="flex justify-center first-section">
      <svg @click="scrollToSkills" class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
      <section class="introduction flex-one section-one-child">
        <div class="img-wrapper">
          <img
            class="img-title-styles img-title"
            :src="imagePathTitle"
            alt="Merlin Stemmer Text"
          />
        </div>

        <div class="high-width">
          <p class="small-margin-bottom">
            Hi there, I'm Merlin Stemmer, a Christchurch native with German
            roots. I'm a web developer, passionate about problem-solving and
            crafting meaningful things through code.
          </p>

          <p class="small-margin-bottom">
            I enjoy hitting the tennis, table tennis, or badminton courts. But,
            I also love video, strategy, and board games. They're not just fun,
            but they also hone my strategic thinking.
          </p>

          <p class="small-margin-bottom">
            Screeps, a coding game, has a special place in my life. More than a
            game, it's a playground where I flex my JavaScript skills, develop
            strategies, and enjoy myself greatly. You'll frequently catch me
            engaged in passionate conversations about Screeps, especially with
            fellow enthusiasts who have an eye for finely crafted code.
          </p>

          <p class="small-margin-bottom">
            In my professional life, I tend to gravitate more towards coding and
            backend work. However, I can rise to the occasion when a great
            design is required. The precision and creativity I cultivate in
            gaming directly translates to my coding and backend work.
          </p>

          <p>
            At the end of the day, I love challenges, be it in work, games, or
            life. Always eager to learn and grow, I can't wait to see where my
            web development journey leads next.
          </p>
        </div>
        <div class="low-width">
          <p class="small-margin-bottom">
            Hi, I'm Merlin Stemmer, a Christchurch-born web developer with a
            love for problem-solving and crafting code.
          </p>

          <p class="small-margin-bottom">
            Sports, strategy games, and particularly Screeps, a coding game,
            enhance my strategic thinking and bring me joy.
          </p>

          <p class="small-margin-bottom">
            While my professional focus leans towards coding and backend work, I
            can create great designs when needed.
          </p>

          <p>
            I relish challenges, love to grow, and eagerly anticipate the next
            step in my web development journey.
          </p>
        </div>
      </section>

      <div class="wrapper-of-wrappers section-one-child flex-one unselectable">
        <div class="my-image-wrapper">
          <img
            src="/images/me.png"
            alt="Image Of Merlin Stemmer At His Desk"
            class="my-image"
          />
        </div>
      </div>
    </div>

    <section ref="skills" class="skills">
      <h2 class="subheading">My Skills</h2>
      <div class="logos">
        <div class="logo-item">
          <svg
            width="800px"
            height="800px"
            viewBox="-1 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Sketch.</desc>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-61.000000, -7639.000000)"
                fill="var(--primary-text)"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z"
                    id="html-[#124]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p>HTML</p>
        </div>
        <div class="logo-item">
          <svg
            fill="var(--primary-text)"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="800px"
            height="800px"
            viewBox="0 0 512 512"
            enable-background="new 0 0 512 512"
            xml:space="preserve"
          >
            <g id="c133de6af664cd4f011a55de6b001b19">
              <path
                display="inline"
                d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"
              />
            </g>
          </svg>
          <p>CSS</p>
        </div>
        <div class="logo-item">
          <svg
            fill="var(--primary-text)"
            width="800px"
            height="800px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-420.000000, -7479.000000)"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M379.328,7337.432 C377.583,7337.432 376.455,7336.6 375.905,7335.512 L375.905,7335.512 L377.435,7334.626 C377.838,7335.284 378.361,7335.767 379.288,7335.767 C380.066,7335.767 380.563,7335.378 380.563,7334.841 C380.563,7334.033 379.485,7333.717 378.724,7333.391 C377.368,7332.814 376.468,7332.089 376.468,7330.558 C376.468,7329.149 377.542,7328.075 379.221,7328.075 C380.415,7328.075 381.275,7328.491 381.892,7329.578 L380.429,7330.518 C380.107,7329.941 379.758,7329.713 379.221,7329.713 C378.67,7329.713 378.321,7330.062 378.321,7330.518 C378.321,7331.082 378.67,7331.31 379.476,7331.659 C381.165,7332.383 382.443,7332.952 382.443,7334.814 C382.443,7336.506 381.114,7337.432 379.328,7337.432 L379.328,7337.432 Z M375,7334.599 C375,7336.546 373.801,7337.575 372.136,7337.575 C370.632,7337.575 369.731,7337 369.288,7336 L369.273,7336 L369.266,7336 L369.262,7336 L370.791,7334.931 C371.086,7335.454 371.352,7335.825 371.996,7335.825 C372.614,7335.825 373,7335.512 373,7334.573 L373,7328 L375,7328 L375,7334.599 Z M364,7339 L384,7339 L384,7319 L364,7319 L364,7339 Z"
                    id="javascript-[#155]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p>JavaScript</p>
        </div>
        <div class="logo-item">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z"
              fill="var(--primary-text)"
            />
          </svg>
          <p>Git</p>
        </div>
        <div class="logo-item">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="页面-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Logo"
                transform="translate(-816.000000, -144.000000)"
                fill-rule="nonzero"
              >
                <g id="vue_fill" transform="translate(816.000000, 144.000000)">
                  <path
                    d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                    id="MingCute"
                    fill-rule="nonzero"
                  ></path>
                  <path
                    d="M19.7071,3.93958 C20.1271,3.22553 21.0465,2.98718 21.7605,3.40721 C22.4325941,3.80253235 22.6832183,4.64015893 22.3602212,5.33264345 L22.2929,5.46064 L13.2929,20.7606 C13.0234,21.2188 12.5315,21.5001 12,21.5001 C11.5168182,21.5001 11.0663636,21.2676207 10.7859767,20.8810992 L10.7071,20.7606 L1.70709,5.46062 C1.28706,4.74657 1.52541,3.82722 2.23946,3.40719 C2.91150706,3.01186765 3.76542042,3.19985159 4.21373713,3.81852642 L4.2929,3.93956 L12,17.0416 L19.7071,3.93958 Z M14.8272,3.93527 C15.2472,3.22122 16.1666,2.98287 16.8806,3.40289 C17.5526941,3.79821235 17.8033183,4.63584779 17.4803212,5.32833335 L17.413,5.45633 L13.2929,12.4605 C13.0234,12.9187 12.5315,13.2 12,13.2 C11.5168182,13.2 11.0663636,12.9675207 10.7859767,12.5809992 L10.7071,12.4605 L6.589,5.45974 C6.16897,4.74569 6.40732,3.82634 7.12137,3.40631 C7.79341706,3.01098765 8.64733042,3.19886696 9.09563879,3.81764642 L9.1748,3.93868 L12,8.74151 L14.8272,3.93527 Z"
                    id="形状"
                    fill="var(--primary-text)"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p>Vue.js</p>
        </div>
        <div class="logo-item">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z"
              fill="var(--primary-text)"
            />
            <path
              d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z"
              fill="var(--primary-text)"
            />
          </svg>
          <p>Node.js</p>
        </div>
        <div class="logo-item">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient
                id="a"
                x1="-645.732"
                y1="839.188"
                x2="-654.59"
                y2="839.25"
                gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.231" stop-color="#999875" />
                <stop offset="0.563" stop-color="#9b9977" />
                <stop offset="0.683" stop-color="#a09f7e" />
                <stop offset="0.768" stop-color="#a9a889" />
                <stop offset="0.837" stop-color="#b7b69a" />
                <stop offset="0.896" stop-color="#c9c7b0" />
                <stop offset="0.948" stop-color="#deddcb" />
                <stop offset="0.994" stop-color="#f8f6eb" />
                <stop offset="1" stop-color="#fbf9ef" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="-644.287"
                y1="823.405"
                x2="-657.028"
                y2="845.476"
                gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#48a547" />
                <stop offset="1" stop-color="#3f9143" />
              </linearGradient>
              <linearGradient
                id="c"
                x1="-643.386"
                y1="839.485"
                x2="-652.418"
                y2="833.417"
                gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#41a247" />
                <stop offset="0.352" stop-color="#4ba74b" />
                <stop offset="0.956" stop-color="#67b554" />
                <stop offset="1" stop-color="#69b655" />
              </linearGradient>
            </defs>
            <path
              d="M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z"
              fill="var(--primary-text)"
            />
            <path
              d="M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z"
              fill="var(--primary-text)"
            />
            <path
              d="M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z"
              fill="var(--primary-text)"
            />
          </svg>
          <p>MongoDB</p>
        </div>
      </div>
    </section>

    <section class="skills">
      <h2 class="subheading">What I'm Learning Now</h2>
      <div class="logos">
        <div class="logo-item">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="var(--primary-text)"
              d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"
            />
          </svg>
          <p>React</p>
        </div>
        <div class="logo-item">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="28"
              height="28"
              rx="1.312"
              style="fill: var(--primary-text)"
            />
            <path
              d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
              style="fill: var(--primary-bg); fill-rule: evenodd"
            />
          </svg>
          <p>Typescript</p>
        </div>
      </div>
    </section>

    <h2 class="subheading">My Websites</h2>
    <section class="projects">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card border"
      >
        <h3 class="project-title">{{ project.title }}</h3>
        <div class="project-image-wrapper">
          <img :src="project.imageLink" alt="Project Image" />
        </div>

        <p>{{ project.description }}</p>
        <div class="links">
          <a :href="project.demoLink" target="_blank">View Live Site</a>
          <span class="github-wrapper">
            <a :href="project.gitHubLink" target="_blank">
              <svg
                class="github"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.6-.015 2.885-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section class="contact">
      <h2 class="subheading">Contact Me</h2>
      <p>
        If you have any inquiries or would like to discuss a project or job
        opportunity, feel free to
        <a href="mailto:stemmermerlin@gmail.com">email me</a> at
        <span style="font-weight: 900" ref="email"
          >stemmermerlin@gmail.com</span
        >

        <svg
          class="icon"
          @click="copyToClipboard"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
          <title>ic_fluent_copy_24_regular</title>
          <desc>Created with Sketch.</desc>
          <g
            id="🔍-Product-Icons"
            stroke="none"
            stroke-width="1"
            fill="currentColor"
            fill-rule="evenodd"
          >
            <g
              id="ic_fluent_copy_24_regular"
              fill="currentColor"
              fill-rule="nonzero"
            >
              <path
                d="M5.50280381,4.62704038 L5.5,6.75 L5.5,17.2542087 C5.5,19.0491342 6.95507456,20.5042087 8.75,20.5042087 L17.3662868,20.5044622 C17.057338,21.3782241 16.2239751,22.0042087 15.2444057,22.0042087 L8.75,22.0042087 C6.12664744,22.0042087 4,19.8775613 4,17.2542087 L4,6.75 C4,5.76928848 4.62744523,4.93512464 5.50280381,4.62704038 Z M17.75,2 C18.9926407,2 20,3.00735931 20,4.25 L20,17.25 C20,18.4926407 18.9926407,19.5 17.75,19.5 L8.75,19.5 C7.50735931,19.5 6.5,18.4926407 6.5,17.25 L6.5,4.25 C6.5,3.00735931 7.50735931,2 8.75,2 L17.75,2 Z M17.75,3.5 L8.75,3.5 C8.33578644,3.5 8,3.83578644 8,4.25 L8,17.25 C8,17.6642136 8.33578644,18 8.75,18 L17.75,18 C18.1642136,18 18.5,17.6642136 18.5,17.25 L18.5,4.25 C18.5,3.83578644 18.1642136,3.5 17.75,3.5 Z"
                id="🎨-Color"
              ></path>
            </g>
          </g>
        </svg>
      </p>

      <div v-if="showCopyMsg" class="overlay">
        <span class="message copy-msg">Email copied to clipboard</span>
      </div>
    </section>
    <section class="current-work">
      <h2 class="subheading">Currently Working On</h2>
      <p>
        I'm currently working on my exciting MMO game called MMO-RTS. It's an
        immersive multiplayer online real-time strategy game where players can
        conquer vast virtual worlds, build powerful civilizations, and engage in
        epic battles.
      </p>
      <p>
        Visit the official website to learn more and join the fun:
        <a target="_blank" href="https://mmo-rts.com">https://mmo-rts.com</a>
      </p>
      <p>
        You can also check out the project on GitHub:
        <a target="_blank" href="https://github.com/waxeye7/mmo-rts"
          >https://github.com/waxeye7/mmo-rts</a
        >
      </p>
      <p>Stay tuned for updates and new features as the game evolves!</p>
    </section>

    <section class="github-links">
      <h2 class="subheading">Find Me on GitHub</h2>
      <div class="github-wrapper" style="margin-bottom: 20px">
        <a href="https://github.com/waxeye7" target="_blank">
          <p>My GitHub Page</p>
        </a>
      </div>
      <div class="repo-wrapper">
        <a href="https://github.com/waxeye7/waxeye7.github.io" target="_blank">
          <p>Or Check out this Site's Repo</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      showCopyMsg: false,
      imagePath: "/images/light.svg",
      imagePathTitle: "/images/merlin-light.png",
      isDarkTheme: true,
      changing: false,
      projects: [
        {
          id: 1,
          title: "MMO RTS",
          imageLink: "/images/mmo-rts.png",
          description:
            "MMO RTS is a project that explores the intricacies of creating a massively multiplayer online real-time strategy game. The game represents a rich shared world, where players can build structures, train units, gather resources, and engage with others in combat. The backend of the game utilizes Node.js, Express, and Socket.IO, with Vue.js driving the frontend. Game state data is managed using MongoDB.",
          demoLink: "https://mmo-rts.com",
          gitHubLink: "https://github.com/waxeye7/mmo-rts",
        },
        {
          id: 2,
          title: "Periodic Table Viewer",
          imageLink: "/images/periodic-table.png",
          description:
            "The Periodic Table Viewer is one of my early projects, built with vanilla JavaScript. The application allows users to view and learn about all the elements of the periodic table. The application features an intuitive and user-friendly interface making it easy to interact with and learn from.",
          demoLink: "https://merlin.stemmer.yoobeestudent.net/filter/",
          gitHubLink: "https://github.com/waxeye7/Periodic-Table-Filter",
        },
        {
          id: 3,
          title: "TechSolutions",
          imageLink: "/images/techsolutions.png",
          description:
            "TechSolutions is the capstone project I completed at the end of my course at Yoobee. The website was built for a hypothetical client, 'TechSolutions', using the WordPress CMS. I created a custom theme for the site, allowing the client to easily add or remove specific posts as needed. This project showcases my understanding of content management systems and my ability to create a functional, customizable, and client-friendly website.",
          demoLink: "https://merlin.stemmer.yoobeestudent.net/techsolutions",
          gitHubLink: "https://github.com/waxeye7/techsolutions",
        },
      ],
    };
  },

  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.body.setAttribute(
        "data-theme",
        this.isDarkTheme ? "dark" : "light"
      );
      if (this.isDarkTheme) {
        this.imagePath = "/images/light.svg";
        document.querySelector(".img-title").classList.add("half-opacity");
        setTimeout(() => {
          this.imagePathTitle = "/images/merlin-light.png";
        }, 150);
        document.querySelector(".img-title").classList.remove("half-opacity");
      } else {
        this.imagePath = "/images/dark.svg";
        document.querySelector(".img-title").classList.add("half-opacity");
        setTimeout(() => {
          this.imagePathTitle = "/images/merlin-dark.png";
        }, 150);
        document.querySelector(".img-title").classList.remove("half-opacity");
      }
    },
    scrollToSkills() {
      this.$refs.skills.scrollIntoView({ behavior: "smooth" });
    },
    copyToClipboard() {
      navigator.clipboard
        .writeText(this.$refs.email.innerText)
        .then(() => {
          this.showCopyMsg = true;
          setTimeout(() => {
            this.showCopyMsg = false;
          }, 1400);
        })
        .catch((err) => {
          console.error("Failed to copy", err);
        });
    },
  },
  mounted() {
    document.body.setAttribute("data-theme", "dark");
  },
};
</script>

<style scoped>
.arrows {
  width: 60px;
  height: 72px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  bottom: 4%;
  z-index: 1;
}

.arrows path {
  stroke: var(--primary-text);
  fill: transparent;
  stroke-width: 1px;
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite;
}

@keyframes arrow {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes arrow /*Safari and Chrome*/ {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.arrows path.a1 {
  animation-delay: -1s;
  -webkit-animation-delay: -1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
  animation-delay: -0.5s;
  -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {
  animation-delay: 0s;
  -webkit-animation-delay: 0s; /* Safari 和 Chrome */
}
.small-margin-bottom {
  margin-bottom: 10px;
}
.portfolio {
  position: relative;
  max-width: 1600px;
  margin: auto;
  padding: 24px 40px 140px;
  font-family: "Quicksand", Arial, sans-serif;
}

.introduction,
.skills,
.projects,
.achievements,
h1 {
  font-size: 24px;
}

h2 {
  margin-bottom: 8px;
}

p,
li {
  line-height: 1.6;
}
p {
  font-size: 18px;
  font-weight: 600;
}
.high-width {
  max-width: 800px;
}
.high-width p {
  font-size: clamp(16px, 1.2vw, 18px);
  text-align: justify;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: var(--link-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
.projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-content: center;
}

@media (min-width: 900px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-card {
  border: 1px solid;
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.theme-button {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 50px;
  width: 50px;
  padding: 10px;
  z-index: 1;
}
.main-heading {
  margin-bottom: 40px;
  font-size: 32px;
}
img {
  transition: opacity 0.1s ease-in-out;
  opacity: 1;
}

img.half-opacity {
  opacity: 0.25;
}
.first-section {
  position: relative;
  height: auto;
  padding-bottom: 10vh;
  flex-wrap: wrap;
  justify-content: space-around;
}

.section-one-child {
  margin: 20px;
  box-sizing: border-box;
  width: 100%;
}
@media (min-width: 800px) {
  .section-one-child {
    width: 45%;
  }
}
.img-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  max-height: 280px;
}
.img-title {
  margin: 30px 10px 34px 0;
}
.introduction {
  font-weight: 500;
  text-align: justify;
}
.low-width {
  display: none;
}
.img-of-me {
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-of-me img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.github-wrapper,
.repo-wrapper {
  display: flex;
  align-items: center;
}
.github-links {
  margin-top: 20px;
}

.github-wrapper a,
.repo-wrapper a {
  color: var(--link-color);
  display: flex;
}

.github {
  width: 40px;
  height: 40px;
  transition: transform ease-out 0.3s;
}
.github:hover {
  transform: scale(1.2);
}

.github-links h2 {
  margin-bottom: 20px;
}
.project-title {
  font-size: 32px;
  margin: 0 0 8px 0;
}
.project-image-wrapper {
  min-height: 240px;
  margin-bottom: 8px;
}
.project-image-wrapper img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.contact {
  padding: 24px 24px 24px 0px;
}
.contact p {
  font-size: 18px;
  line-height: 1.6;
}
.icon {
  cursor: pointer;
  color: var(--link-color);
  width: 24px;
  height: 24px;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 116%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 999;
}
.copy-msg {
  padding: 10px 20px;
  background-color: var(--primary-bg);
  border-radius: 4px;
  animation: fadeOut 2s forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.message {
  color: var(--link-color);
  font-size: 1.5rem;
  font-weight: bold;
}
.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}
.logos p {
  font-weight: 600;
}

.logo-item svg {
  height: 80px;
  width: auto;
  color: var(--primary-text);
  fill: var(--primary-text);
}

.logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.logo-item img {
  height: 80px;
  width: auto;
  color: var(--primary-text);
  fill: var(--primary-text);
}

.logo-item p {
  margin-top: 8px;
}
.subheading {
  font-size: clamp(32px, 3vw, 44px);
  margin: 14px 0 10px 0;
}

.current-work {
  margin-bottom: 30px;
}

.wrapper-of-wrappers {
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-image-wrapper {
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 380px;
  max-height: 850px;
  height: 50vw;
  width: 70%;
  padding: 0px 20px;
  background-color: var(--primary-text);
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.my-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
@media (max-width: 1250px) {
  .img-title {
    height: 210px;
  }
}
@media (max-width: 1150px) {
  .img-title {
    margin-top: 0;
    height: 150px;
  }
  .portfolio {
    padding-left: 8px;
    padding-right: 8px;
  }
}

@media (max-width: 1000px) {
  .high-width p {
    font-size: 15px;
  }
}

@media (max-width: 900px) {
  .img-title {
    height: 125px;
  }
  .low-width p {
    font-size: clamp(16px, 1.2vw, 18px);
    text-align: left;
  }
}
@media (max-width: 800px) {
  .my-image-wrapper {
    padding: 0;
    background-color: transparent;
  }
  .low-width {
    display: block;
  }
  .high-width {
    display: none;
  }
  .first-section {
    flex-direction: column;
  }

  .introduction,
  .img-of-me {
    max-width: 100%;
    max-height: 400px;
  }
  .introduction {
    margin-bottom: 20px;
  }
  .arrows {
    bottom: 30px;
  }
}

@media (max-height: 800px) and (max-width: 1400px) {
  .high-width p {
    font-size: 14.5px;
  }
  .img-title {
    height: 120px;
  }
}

@media (max-height: 600px) and (max-width: 1024px) {
  .low-width {
    display: block;
  }
  .high-width {
    display: none;
  }
  .low-width p {
    font-size: 17px;
  }
}
@media (max-height: 740px) and (max-width: 400px) {
  .my-image-wrapper {
    display: none !important;
  }
}

@media (max-height: 720px) and (max-width: 540px) {
  .my-image-wrapper {
    display: none !important;
  }
}

@media (max-width: 520px) {
  .img-title {
    height: 90px;
  }
  .low-width p {
    font-size: clamp(14px, 2vw 16px);
  }
  .my-image-wrapper {
    min-height: 180px;
  }
}
@media (max-width: 380px) {
  .my-image-wrapper {
    margin-top: 30px;
  }
  .first-section {
    padding-bottom: 0%;
  }
  .arrows {
    display: none;
  }
}
@media (max-width: 280px) {
}
</style>

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    replace: {
      example: {
        src: ['src/*.js'],
        dest: 'dist/main.js',
        replacements: [{"from":"😁","to":"ːgrinning_face_with_smiling_eyesː"},{"from":"😂","to":"ːface_with_tears_of_joyː"},{"from":"😃","to":"ːsmiling_face_with_open_mouthː"},{"from":"😄","to":"ːsmiling_face_with_open_mouth_and_smiling_eyesː"},{"from":"😅","to":"ːsmiling_face_with_open_mouth_and_cold_sweatː"},{"from":"😆","to":"ːsmiling_face_with_open_mouth_and_tightly-closed_eyesː"},{"from":"😉","to":"ːwinking_faceː"},{"from":"😊","to":"ːsmiling_face_with_smiling_eyesː"},{"from":"😋","to":"ːface_savouring_delicious_foodː"},{"from":"😌","to":"ːrelieved_faceː"},{"from":"😍","to":"ːsmiling_face_with_heart-shaped_eyesː"},{"from":"😏","to":"ːsmirking_faceː"},{"from":"😒","to":"ːunamused_faceː"},{"from":"😓","to":"ːface_with_cold_sweatː"},{"from":"😔","to":"ːpensive_faceː"},{"from":"😖","to":"ːconfounded_faceː"},{"from":"😘","to":"ːface_throwing_a_kissː"},{"from":"😚","to":"ːkissing_face_with_closed_eyesː"},{"from":"😜","to":"ːface_with_stuck-out_tongue_and_winking_eyeː"},{"from":"😝","to":"ːface_with_stuck-out_tongue_and_tightly-closed_eyesː"},{"from":"😞","to":"ːdisappointed_faceː"},{"from":"😠","to":"ːangry_faceː"},{"from":"😡","to":"ːpouting_faceː"},{"from":"😢","to":"ːcrying_faceː"},{"from":"😣","to":"ːpersevering_faceː"},{"from":"😤","to":"ːface_with_look_of_triumphː"},{"from":"😥","to":"ːdisappointed_but_relieved_faceː"},{"from":"😨","to":"ːfearful_faceː"},{"from":"😩","to":"ːweary_faceː"},{"from":"😪","to":"ːsleepy_faceː"},{"from":"😫","to":"ːtired_faceː"},{"from":"😭","to":"ːloudly_crying_faceː"},{"from":"😰","to":"ːface_with_open_mouth_and_cold_sweatː"},{"from":"😱","to":"ːface_screaming_in_fearː"},{"from":"😲","to":"ːastonished_faceː"},{"from":"😳","to":"ːflushed_faceː"},{"from":"😵","to":"ːdizzy_faceː"},{"from":"😷","to":"ːface_with_medical_maskː"},{"from":"😸","to":"ːgrinning_cat_face_with_smiling_eyesː"},{"from":"😹","to":"ːcat_face_with_tears_of_joyː"},{"from":"😺","to":"ːsmiling_cat_face_with_open_mouthː"},{"from":"😻","to":"ːsmiling_cat_face_with_heart-shaped_eyesː"},{"from":"😼","to":"ːcat_face_with_wry_smileː"},{"from":"😽","to":"ːkissing_cat_face_with_closed_eyesː"},{"from":"😾","to":"ːpouting_cat_faceː"},{"from":"😿","to":"ːcrying_cat_faceː"},{"from":"🙀","to":"ːweary_cat_faceː"},{"from":"🙅","to":"ːface_with_no_good_gestureː"},{"from":"🙆","to":"ːface_with_ok_gestureː"},{"from":"🙇","to":"ːperson_bowing_deeplyː"},{"from":"🙈","to":"ːsee-no-evil_monkeyː"},{"from":"🙉","to":"ːhear-no-evil_monkeyː"},{"from":"🙊","to":"ːspeak-no-evil_monkeyː"},{"from":"🙋","to":"ːhappy_person_raising_one_handː"},{"from":"🙌","to":"ːperson_raising_both_hands_in_celebrationː"},{"from":"🙍","to":"ːperson_frowningː"},{"from":"🙎","to":"ːperson_with_pouting_faceː"},{"from":"🙏","to":"ːperson_with_folded_handsː"},{"from":"✂","to":"ːblack_scissorsː"},{"from":"✅","to":"ːwhite_heavy_check_markː"},{"from":"✈","to":"ːairplaneː"},{"from":"✉","to":"ːenvelopeː"},{"from":"✊","to":"ːraised_fistː"},{"from":"✋","to":"ːraised_handː"},{"from":"✌","to":"ːvictory_handː"},{"from":"✏","to":"ːpencilː"},{"from":"✒","to":"ːblack_nibː"},{"from":"✔","to":"ːheavy_check_markː"},{"from":"✖","to":"ːheavy_multiplication_xː"},{"from":"✨","to":"ːsparklesː"},{"from":"✳","to":"ːeight_spoked_asteriskː"},{"from":"✴","to":"ːeight_pointed_black_starː"},{"from":"❄","to":"ːsnowflakeː"},{"from":"❇","to":"ːsparkleː"},{"from":"❌","to":"ːcross_markː"},{"from":"❎","to":"ːnegative_squared_cross_markː"},{"from":"❓","to":"ːblack_question_mark_ornamentː"},{"from":"❔","to":"ːwhite_question_mark_ornamentː"},{"from":"❕","to":"ːwhite_exclamation_mark_ornamentː"},{"from":"❗","to":"ːheavy_exclamation_mark_symbolː"},{"from":"❤","to":"ːheavy_black_heartː"},{"from":"➕","to":"ːheavy_plus_signː"},{"from":"➖","to":"ːheavy_minus_signː"},{"from":"➗","to":"ːheavy_division_signː"},{"from":"➡","to":"ːblack_rightwards_arrowː"},{"from":"➰","to":"ːcurly_loopː"},{"from":"🚀","to":"ːrocketː"},{"from":"🚃","to":"ːrailway_carː"},{"from":"🚄","to":"ːhigh-speed_trainː"},{"from":"🚅","to":"ːhigh-speed_train_with_bullet_noseː"},{"from":"🚇","to":"ːmetroː"},{"from":"🚉","to":"ːstationː"},{"from":"🚌","to":"ːbusː"},{"from":"🚏","to":"ːbus_stopː"},{"from":"🚑","to":"ːambulanceː"},{"from":"🚒","to":"ːfire_engineː"},{"from":"🚓","to":"ːpolice_carː"},{"from":"🚕","to":"ːtaxiː"},{"from":"🚗","to":"ːautomobileː"},{"from":"🚙","to":"ːrecreational_vehicleː"},{"from":"🚚","to":"ːdelivery_truckː"},{"from":"🚢","to":"ːshipː"},{"from":"🚤","to":"ːspeedboatː"},{"from":"🚥","to":"ːhorizontal_traffic_lightː"},{"from":"🚧","to":"ːconstruction_signː"},{"from":"🚨","to":"ːpolice_cars_revolving_lightː"},{"from":"🚩","to":"ːtriangular_flag_on_postː"},{"from":"🚪","to":"ːdoorː"},{"from":"🚫","to":"ːno_entry_signː"},{"from":"🚬","to":"ːsmoking_symbolː"},{"from":"🚭","to":"ːno_smoking_symbolː"},{"from":"🚲","to":"ːbicycleː"},{"from":"🚶","to":"ːpedestrianː"},{"from":"🚹","to":"ːmens_symbolː"},{"from":"🚺","to":"ːwomens_symbolː"},{"from":"🚻","to":"ːrestroomː"},{"from":"🚼","to":"ːbaby_symbolː"},{"from":"🚽","to":"ːtoiletː"},{"from":"🚾","to":"ːwater_closetː"},{"from":"🛀","to":"ːbathː"},{"from":"Ⓜ","to":"ːcircled_latin_capital_letter_mː"},{"from":"🅰","to":"ːnegative_squared_latin_capital_letter_aː"},{"from":"🅱","to":"ːnegative_squared_latin_capital_letter_bː"},{"from":"🅾","to":"ːnegative_squared_latin_capital_letter_oː"},{"from":"🅿","to":"ːnegative_squared_latin_capital_letter_pː"},{"from":"🆎","to":"ːnegative_squared_abː"},{"from":"🆑","to":"ːsquared_clː"},{"from":"🆒","to":"ːsquared_coolː"},{"from":"🆓","to":"ːsquared_freeː"},{"from":"🆔","to":"ːsquared_idː"},{"from":"🆕","to":"ːsquared_newː"},{"from":"🆖","to":"ːsquared_ngː"},{"from":"🆗","to":"ːsquared_okː"},{"from":"🆘","to":"ːsquared_sosː"},{"from":"🆙","to":"ːsquared_up_with_exclamation_markː"},{"from":"🆚","to":"ːsquared_vsː"},{"from":"🈁","to":"ːsquared_katakana_kokoː"},{"from":"🈂","to":"ːsquared_katakana_saː"},{"from":"🈚","to":"ːsquared_cjk_unified_ideograph-7121ː"},{"from":"🈯","to":"ːsquared_cjk_unified_ideograph-6307ː"},{"from":"🈲","to":"ːsquared_cjk_unified_ideograph-7981ː"},{"from":"🈳","to":"ːsquared_cjk_unified_ideograph-7a7aː"},{"from":"🈴","to":"ːsquared_cjk_unified_ideograph-5408ː"},{"from":"🈵","to":"ːsquared_cjk_unified_ideograph-6e80ː"},{"from":"🈶","to":"ːsquared_cjk_unified_ideograph-6709ː"},{"from":"🈷","to":"ːsquared_cjk_unified_ideograph-6708ː"},{"from":"🈸","to":"ːsquared_cjk_unified_ideograph-7533ː"},{"from":"🈹","to":"ːsquared_cjk_unified_ideograph-5272ː"},{"from":"🈺","to":"ːsquared_cjk_unified_ideograph-55b6ː"},{"from":"🉐","to":"ːcircled_ideograph_advantageː"},{"from":"🉑","to":"ːcircled_ideograph_acceptː"},{"from":"©","to":"ːcopyright_signː"},{"from":"®","to":"ːregistered_signː"},{"from":"‼","to":"ːdouble_exclamation_markː"},{"from":"⁉","to":"ːexclamation_question_markː"},{"from":"™","to":"ːtrade_mark_signː"},{"from":"ℹ","to":"ːinformation_sourceː"},{"from":"↔","to":"ːleft_right_arrowː"},{"from":"↕","to":"ːup_down_arrowː"},{"from":"↖","to":"ːnorth_west_arrowː"},{"from":"↗","to":"ːnorth_east_arrowː"},{"from":"↘","to":"ːsouth_east_arrowː"},{"from":"↙","to":"ːsouth_west_arrowː"},{"from":"↩","to":"ːleftwards_arrow_with_hookː"},{"from":"↪","to":"ːrightwards_arrow_with_hookː"},{"from":"⌚","to":"ːwatchː"},{"from":"⌛","to":"ːhourglassː"},{"from":"⏩","to":"ːblack_right-pointing_double_triangleː"},{"from":"⏪","to":"ːblack_left-pointing_double_triangleː"},{"from":"⏫","to":"ːblack_up-pointing_double_triangleː"},{"from":"⏬","to":"ːblack_down-pointing_double_triangleː"},{"from":"⏰","to":"ːalarm_clockː"},{"from":"⏳","to":"ːhourglass_with_flowing_sandː"},{"from":"▪","to":"ːblack_small_squareː"},{"from":"▫","to":"ːwhite_small_squareː"},{"from":"▶","to":"ːblack_right-pointing_triangleː"},{"from":"◀","to":"ːblack_left-pointing_triangleː"},{"from":"◻","to":"ːwhite_medium_squareː"},{"from":"◼","to":"ːblack_medium_squareː"},{"from":"◽","to":"ːwhite_medium_small_squareː"},{"from":"◾","to":"ːblack_medium_small_squareː"},{"from":"☀","to":"ːblack_sun_with_raysː"},{"from":"☁","to":"ːcloudː"},{"from":"☎","to":"ːblack_telephoneː"},{"from":"☑","to":"ːballot_box_with_checkː"},{"from":"☔","to":"ːumbrella_with_rain_dropsː"},{"from":"☕","to":"ːhot_beverageː"},{"from":"☝","to":"ːwhite_up_pointing_indexː"},{"from":"☺","to":"ːwhite_smiling_faceː"},{"from":"♈","to":"ːariesː"},{"from":"♉","to":"ːtaurusː"},{"from":"♊","to":"ːgeminiː"},{"from":"♋","to":"ːcancerː"},{"from":"♌","to":"ːleoː"},{"from":"♍","to":"ːvirgoː"},{"from":"♎","to":"ːlibraː"},{"from":"♏","to":"ːscorpiusː"},{"from":"♐","to":"ːsagittariusː"},{"from":"♑","to":"ːcapricornː"},{"from":"♒","to":"ːaquariusː"},{"from":"♓","to":"ːpiscesː"},{"from":"♠","to":"ːblack_spade_suitː"},{"from":"♣","to":"ːblack_club_suitː"},{"from":"♥","to":"ːblack_heart_suitː"},{"from":"♦","to":"ːblack_diamond_suitː"},{"from":"♨","to":"ːhot_springsː"},{"from":"♻","to":"ːblack_universal_recycling_symbolː"},{"from":"♿","to":"ːwheelchair_symbolː"},{"from":"⚓","to":"ːanchorː"},{"from":"⚠","to":"ːwarning_signː"},{"from":"⚡","to":"ːhigh_voltage_signː"},{"from":"⚪","to":"ːmedium_white_circleː"},{"from":"⚫","to":"ːmedium_black_circleː"},{"from":"⚽","to":"ːsoccer_ballː"},{"from":"⚾","to":"ːbaseballː"},{"from":"⛄","to":"ːsnowman_without_snowː"},{"from":"⛅","to":"ːsun_behind_cloudː"},{"from":"⛎","to":"ːophiuchusː"},{"from":"⛔","to":"ːno_entryː"},{"from":"⛪","to":"ːchurchː"},{"from":"⛲","to":"ːfountainː"},{"from":"⛳","to":"ːflag_in_holeː"},{"from":"⛵","to":"ːsailboatː"},{"from":"⛺","to":"ːtentː"},{"from":"⛽","to":"ːfuel_pumpː"},{"from":"⤴","to":"ːarrow_pointing_rightwards_then_curving_upwardsː"},{"from":"⤵","to":"ːarrow_pointing_rightwards_then_curving_downwardsː"},{"from":"⬅","to":"ːleftwards_black_arrowː"},{"from":"⬆","to":"ːupwards_black_arrowː"},{"from":"⬇","to":"ːdownwards_black_arrowː"},{"from":"⬛","to":"ːblack_large_squareː"},{"from":"⬜","to":"ːwhite_large_squareː"},{"from":"⭐","to":"ːwhite_medium_starː"},{"from":"⭕","to":"ːheavy_large_circleː"},{"from":"〰","to":"ːwavy_dashː"},{"from":"〽","to":"ːpart_alternation_markː"},{"from":"㊗","to":"ːcircled_ideograph_congratulationː"},{"from":"㊙","to":"ːcircled_ideograph_secretː"},{"from":"🀄","to":"ːmahjong_tile_red_dragonː"},{"from":"🃏","to":"ːplaying_card_black_jokerː"},{"from":"🌀","to":"ːcycloneː"},{"from":"🌁","to":"ːfoggyː"},{"from":"🌂","to":"ːclosed_umbrellaː"},{"from":"🌃","to":"ːnight_with_starsː"},{"from":"🌄","to":"ːsunrise_over_mountainsː"},{"from":"🌅","to":"ːsunriseː"},{"from":"🌆","to":"ːcityscape_at_duskː"},{"from":"🌇","to":"ːsunset_over_buildingsː"},{"from":"🌈","to":"ːrainbowː"},{"from":"🌉","to":"ːbridge_at_nightː"},{"from":"🌊","to":"ːwater_waveː"},{"from":"🌋","to":"ːvolcanoː"},{"from":"🌌","to":"ːmilky_wayː"},{"from":"🌏","to":"ːearth_globe_asia-australiaː"},{"from":"🌑","to":"ːnew_moon_symbolː"},{"from":"🌓","to":"ːfirst_quarter_moon_symbolː"},{"from":"🌔","to":"ːwaxing_gibbous_moon_symbolː"},{"from":"🌕","to":"ːfull_moon_symbolː"},{"from":"🌙","to":"ːcrescent_moonː"},{"from":"🌛","to":"ːfirst_quarter_moon_with_faceː"},{"from":"🌟","to":"ːglowing_starː"},{"from":"🌠","to":"ːshooting_starː"},{"from":"🌰","to":"ːchestnutː"},{"from":"🌱","to":"ːseedlingː"},{"from":"🌴","to":"ːpalm_treeː"},{"from":"🌵","to":"ːcactusː"},{"from":"🌷","to":"ːtulipː"},{"from":"🌸","to":"ːcherry_blossomː"},{"from":"🌹","to":"ːroseː"},{"from":"🌺","to":"ːhibiscusː"},{"from":"🌻","to":"ːsunflowerː"},{"from":"🌼","to":"ːblossomː"},{"from":"🌽","to":"ːear_of_maizeː"},{"from":"🌾","to":"ːear_of_riceː"},{"from":"🌿","to":"ːherbː"},{"from":"🍀","to":"ːfour_leaf_cloverː"},{"from":"🍁","to":"ːmaple_leafː"},{"from":"🍂","to":"ːfallen_leafː"},{"from":"🍃","to":"ːleaf_fluttering_in_windː"},{"from":"🍄","to":"ːmushroomː"},{"from":"🍅","to":"ːtomatoː"},{"from":"🍆","to":"ːaubergineː"},{"from":"🍇","to":"ːgrapesː"},{"from":"🍈","to":"ːmelonː"},{"from":"🍉","to":"ːwatermelonː"},{"from":"🍊","to":"ːtangerineː"},{"from":"🍌","to":"ːbananaː"},{"from":"🍍","to":"ːpineappleː"},{"from":"🍎","to":"ːred_appleː"},{"from":"🍏","to":"ːgreen_appleː"},{"from":"🍑","to":"ːpeachː"},{"from":"🍒","to":"ːcherriesː"},{"from":"🍓","to":"ːstrawberryː"},{"from":"🍔","to":"ːhamburgerː"},{"from":"🍕","to":"ːslice_of_pizzaː"},{"from":"🍖","to":"ːmeat_on_boneː"},{"from":"🍗","to":"ːpoultry_legː"},{"from":"🍘","to":"ːrice_crackerː"},{"from":"🍙","to":"ːrice_ballː"},{"from":"🍚","to":"ːcooked_riceː"},{"from":"🍛","to":"ːcurry_and_riceː"},{"from":"🍜","to":"ːsteaming_bowlː"},{"from":"🍝","to":"ːspaghettiː"},{"from":"🍞","to":"ːbreadː"},{"from":"🍟","to":"ːfrench_friesː"},{"from":"🍠","to":"ːroasted_sweet_potatoː"},{"from":"🍡","to":"ːdangoː"},{"from":"🍢","to":"ːodenː"},{"from":"🍣","to":"ːsushiː"},{"from":"🍤","to":"ːfried_shrimpː"},{"from":"🍥","to":"ːfish_cake_with_swirl_designː"},{"from":"🍦","to":"ːsoft_ice_creamː"},{"from":"🍧","to":"ːshaved_iceː"},{"from":"🍨","to":"ːice_creamː"},{"from":"🍩","to":"ːdoughnutː"},{"from":"🍪","to":"ːcookieː"},{"from":"🍫","to":"ːchocolate_barː"},{"from":"🍬","to":"ːcandyː"},{"from":"🍭","to":"ːlollipopː"},{"from":"🍮","to":"ːcustardː"},{"from":"🍯","to":"ːhoney_potː"},{"from":"🍰","to":"ːshortcakeː"},{"from":"🍱","to":"ːbento_boxː"},{"from":"🍲","to":"ːpot_of_foodː"},{"from":"🍳","to":"ːcookingː"},{"from":"🍴","to":"ːfork_and_knifeː"},{"from":"🍵","to":"ːteacup_without_handleː"},{"from":"🍶","to":"ːsake_bottle_and_cupː"},{"from":"🍷","to":"ːwine_glassː"},{"from":"🍸","to":"ːcocktail_glassː"},{"from":"🍹","to":"ːtropical_drinkː"},{"from":"🍺","to":"ːbeer_mugː"},{"from":"🍻","to":"ːclinking_beer_mugsː"},{"from":"🎀","to":"ːribbonː"},{"from":"🎁","to":"ːwrapped_presentː"},{"from":"🎂","to":"ːbirthday_cakeː"},{"from":"🎃","to":"ːjack-o-lanternː"},{"from":"🎄","to":"ːchristmas_treeː"},{"from":"🎅","to":"ːfather_christmasː"},{"from":"🎆","to":"ːfireworksː"},{"from":"🎇","to":"ːfirework_sparklerː"},{"from":"🎈","to":"ːballoonː"},{"from":"🎉","to":"ːparty_popperː"},{"from":"🎊","to":"ːconfetti_ballː"},{"from":"🎋","to":"ːtanabata_treeː"},{"from":"🎌","to":"ːcrossed_flagsː"},{"from":"🎍","to":"ːpine_decorationː"},{"from":"🎎","to":"ːjapanese_dollsː"},{"from":"🎏","to":"ːcarp_streamerː"},{"from":"🎐","to":"ːwind_chimeː"},{"from":"🎑","to":"ːmoon_viewing_ceremonyː"},{"from":"🎒","to":"ːschool_satchelː"},{"from":"🎓","to":"ːgraduation_capː"},{"from":"🎠","to":"ːcarousel_horseː"},{"from":"🎡","to":"ːferris_wheelː"},{"from":"🎢","to":"ːroller_coasterː"},{"from":"🎣","to":"ːfishing_pole_and_fishː"},{"from":"🎤","to":"ːmicrophoneː"},{"from":"🎥","to":"ːmovie_cameraː"},{"from":"🎦","to":"ːcinemaː"},{"from":"🎧","to":"ːheadphoneː"},{"from":"🎨","to":"ːartist_paletteː"},{"from":"🎩","to":"ːtop_hatː"},{"from":"🎪","to":"ːcircus_tentː"},{"from":"🎫","to":"ːticketː"},{"from":"🎬","to":"ːclapper_boardː"},{"from":"🎭","to":"ːperforming_artsː"},{"from":"🎮","to":"ːvideo_gameː"},{"from":"🎯","to":"ːdirect_hitː"},{"from":"🎰","to":"ːslot_machineː"},{"from":"🎱","to":"ːbilliardsː"},{"from":"🎲","to":"ːgame_dieː"},{"from":"🎳","to":"ːbowlingː"},{"from":"🎴","to":"ːflower_playing_cardsː"},{"from":"🎵","to":"ːmusical_noteː"},{"from":"🎶","to":"ːmultiple_musical_notesː"},{"from":"🎷","to":"ːsaxophoneː"},{"from":"🎸","to":"ːguitarː"},{"from":"🎹","to":"ːmusical_keyboardː"},{"from":"🎺","to":"ːtrumpetː"},{"from":"🎻","to":"ːviolinː"},{"from":"🎼","to":"ːmusical_scoreː"},{"from":"🎽","to":"ːrunning_shirt_with_sashː"},{"from":"🎾","to":"ːtennis_racquet_and_ballː"},{"from":"🎿","to":"ːski_and_ski_bootː"},{"from":"🏀","to":"ːbasketball_and_hoopː"},{"from":"🏁","to":"ːchequered_flagː"},{"from":"🏂","to":"ːsnowboarderː"},{"from":"🏃","to":"ːrunnerː"},{"from":"🏄","to":"ːsurferː"},{"from":"🏆","to":"ːtrophyː"},{"from":"🏈","to":"ːamerican_footballː"},{"from":"🏊","to":"ːswimmerː"},{"from":"🏠","to":"ːhouse_buildingː"},{"from":"🏡","to":"ːhouse_with_gardenː"},{"from":"🏢","to":"ːoffice_buildingː"},{"from":"🏣","to":"ːjapanese_post_officeː"},{"from":"🏥","to":"ːhospitalː"},{"from":"🏦","to":"ːbankː"},{"from":"🏧","to":"ːautomated_teller_machineː"},{"from":"🏨","to":"ːhotelː"},{"from":"🏩","to":"ːlove_hotelː"},{"from":"🏪","to":"ːconvenience_storeː"},{"from":"🏫","to":"ːschoolː"},{"from":"🏬","to":"ːdepartment_storeː"},{"from":"🏭","to":"ːfactoryː"},{"from":"🏮","to":"ːizakaya_lanternː"},{"from":"🏯","to":"ːjapanese_castleː"},{"from":"🏰","to":"ːeuropean_castleː"},{"from":"🐌","to":"ːsnailː"},{"from":"🐍","to":"ːsnakeː"},{"from":"🐎","to":"ːhorseː"},{"from":"🐑","to":"ːsheepː"},{"from":"🐒","to":"ːmonkeyː"},{"from":"🐔","to":"ːchickenː"},{"from":"🐗","to":"ːboarː"},{"from":"🐘","to":"ːelephantː"},{"from":"🐙","to":"ːoctopusː"},{"from":"🐚","to":"ːspiral_shellː"},{"from":"🐛","to":"ːbugː"},{"from":"🐜","to":"ːantː"},{"from":"🐝","to":"ːhoneybeeː"},{"from":"🐞","to":"ːlady_beetleː"},{"from":"🐟","to":"ːfishː"},{"from":"🐠","to":"ːtropical_fishː"},{"from":"🐡","to":"ːblowfishː"},{"from":"🐢","to":"ːturtleː"},{"from":"🐣","to":"ːhatching_chickː"},{"from":"🐤","to":"ːbaby_chickː"},{"from":"🐥","to":"ːfront-facing_baby_chickː"},{"from":"🐦","to":"ːbirdː"},{"from":"🐧","to":"ːpenguinː"},{"from":"🐨","to":"ːkoalaː"},{"from":"🐩","to":"ːpoodleː"},{"from":"🐫","to":"ːbactrian_camelː"},{"from":"🐬","to":"ːdolphinː"},{"from":"🐭","to":"ːmouse_faceː"},{"from":"🐮","to":"ːcow_faceː"},{"from":"🐯","to":"ːtiger_faceː"},{"from":"🐰","to":"ːrabbit_faceː"},{"from":"🐱","to":"ːcat_faceː"},{"from":"🐲","to":"ːdragon_faceː"},{"from":"🐳","to":"ːspouting_whaleː"},{"from":"🐴","to":"ːhorse_faceː"},{"from":"🐵","to":"ːmonkey_faceː"},{"from":"🐶","to":"ːdog_faceː"},{"from":"🐷","to":"ːpig_faceː"},{"from":"🐸","to":"ːfrog_faceː"},{"from":"🐹","to":"ːhamster_faceː"},{"from":"🐺","to":"ːwolf_faceː"},{"from":"🐻","to":"ːbear_faceː"},{"from":"🐼","to":"ːpanda_faceː"},{"from":"🐽","to":"ːpig_noseː"},{"from":"🐾","to":"ːpaw_printsː"},{"from":"👀","to":"ːeyesː"},{"from":"👂","to":"ːearː"},{"from":"👃","to":"ːnoseː"},{"from":"👄","to":"ːmouthː"},{"from":"👅","to":"ːtongueː"},{"from":"👆","to":"ːwhite_up_pointing_backhand_indexː"},{"from":"👇","to":"ːwhite_down_pointing_backhand_indexː"},{"from":"👈","to":"ːwhite_left_pointing_backhand_indexː"},{"from":"👉","to":"ːwhite_right_pointing_backhand_indexː"},{"from":"👊","to":"ːfisted_hand_signː"},{"from":"👋","to":"ːwaving_hand_signː"},{"from":"👌","to":"ːok_hand_signː"},{"from":"👍","to":"ːthumbs_up_signː"},{"from":"👎","to":"ːthumbs_down_signː"},{"from":"👏","to":"ːclapping_hands_signː"},{"from":"👐","to":"ːopen_hands_signː"},{"from":"👑","to":"ːcrownː"},{"from":"👒","to":"ːwomans_hatː"},{"from":"👓","to":"ːeyeglassesː"},{"from":"👔","to":"ːnecktieː"},{"from":"👕","to":"ːt-shirtː"},{"from":"👖","to":"ːjeansː"},{"from":"👗","to":"ːdressː"},{"from":"👘","to":"ːkimonoː"},{"from":"👙","to":"ːbikiniː"},{"from":"👚","to":"ːwomans_clothesː"},{"from":"👛","to":"ːpurseː"},{"from":"👜","to":"ːhandbagː"},{"from":"👝","to":"ːpouchː"},{"from":"👞","to":"ːmans_shoeː"},{"from":"👟","to":"ːathletic_shoeː"},{"from":"👠","to":"ːhigh-heeled_shoeː"},{"from":"👡","to":"ːwomans_sandalː"},{"from":"👢","to":"ːwomans_bootsː"},{"from":"👣","to":"ːfootprintsː"},{"from":"👤","to":"ːbust_in_silhouetteː"},{"from":"👦","to":"ːboyː"},{"from":"👧","to":"ːgirlː"},{"from":"👨","to":"ːmanː"},{"from":"👩","to":"ːwomanː"},{"from":"👪","to":"ːfamilyː"},{"from":"👫","to":"ːman_and_woman_holding_handsː"},{"from":"👮","to":"ːpolice_officerː"},{"from":"👯","to":"ːwoman_with_bunny_earsː"},{"from":"👰","to":"ːbride_with_veilː"},{"from":"👱","to":"ːperson_with_blond_hairː"},{"from":"👲","to":"ːman_with_gua_pi_maoː"},{"from":"👳","to":"ːman_with_turbanː"},{"from":"👴","to":"ːolder_manː"},{"from":"👵","to":"ːolder_womanː"},{"from":"👶","to":"ːbabyː"},{"from":"👷","to":"ːconstruction_workerː"},{"from":"👸","to":"ːprincessː"},{"from":"👹","to":"ːjapanese_ogreː"},{"from":"👺","to":"ːjapanese_goblinː"},{"from":"👻","to":"ːghostː"},{"from":"👼","to":"ːbaby_angelː"},{"from":"👽","to":"ːextraterrestrial_alienː"},{"from":"👾","to":"ːalien_monsterː"},{"from":"👿","to":"ːimpː"},{"from":"💀","to":"ːskullː"},{"from":"💁","to":"ːinformation_desk_personː"},{"from":"💂","to":"ːguardsmanː"},{"from":"💃","to":"ːdancerː"},{"from":"💄","to":"ːlipstickː"},{"from":"💅","to":"ːnail_polishː"},{"from":"💆","to":"ːface_massageː"},{"from":"💇","to":"ːhaircutː"},{"from":"💈","to":"ːbarber_poleː"},{"from":"💉","to":"ːsyringeː"},{"from":"💊","to":"ːpillː"},{"from":"💋","to":"ːkiss_markː"},{"from":"💌","to":"ːlove_letterː"},{"from":"💍","to":"ːringː"},{"from":"💎","to":"ːgem_stoneː"},{"from":"💏","to":"ːkissː"},{"from":"💐","to":"ːbouquetː"},{"from":"💑","to":"ːcouple_with_heartː"},{"from":"💒","to":"ːweddingː"},{"from":"💓","to":"ːbeating_heartː"},{"from":"💔","to":"ːbroken_heartː"},{"from":"💕","to":"ːtwo_heartsː"},{"from":"💖","to":"ːsparkling_heartː"},{"from":"💗","to":"ːgrowing_heartː"},{"from":"💘","to":"ːheart_with_arrowː"},{"from":"💙","to":"ːblue_heartː"},{"from":"💚","to":"ːgreen_heartː"},{"from":"💛","to":"ːyellow_heartː"},{"from":"💜","to":"ːpurple_heartː"},{"from":"💝","to":"ːheart_with_ribbonː"},{"from":"💞","to":"ːrevolving_heartsː"},{"from":"💟","to":"ːheart_decorationː"},{"from":"💠","to":"ːdiamond_shape_with_a_dot_insideː"},{"from":"💡","to":"ːelectric_light_bulbː"},{"from":"💢","to":"ːanger_symbolː"},{"from":"💣","to":"ːbombː"},{"from":"💤","to":"ːsleeping_symbolː"},{"from":"💥","to":"ːcollision_symbolː"},{"from":"💦","to":"ːsplashing_sweat_symbolː"},{"from":"💧","to":"ːdropletː"},{"from":"💨","to":"ːdash_symbolː"},{"from":"💩","to":"ːpile_of_pooː"},{"from":"💪","to":"ːflexed_bicepsː"},{"from":"💫","to":"ːdizzy_symbolː"},{"from":"💬","to":"ːspeech_balloonː"},{"from":"💮","to":"ːwhite_flowerː"},{"from":"💯","to":"ːhundred_points_symbolː"},{"from":"💰","to":"ːmoney_bagː"},{"from":"💱","to":"ːcurrency_exchangeː"},{"from":"💲","to":"ːheavy_dollar_signː"},{"from":"💳","to":"ːcredit_cardː"},{"from":"💴","to":"ːbanknote_with_yen_signː"},{"from":"💵","to":"ːbanknote_with_dollar_signː"},{"from":"💸","to":"ːmoney_with_wingsː"},{"from":"💹","to":"ːchart_with_upwards_trend_and_yen_signː"},{"from":"💺","to":"ːseatː"},{"from":"💻","to":"ːpersonal_computerː"},{"from":"💼","to":"ːbriefcaseː"},{"from":"💽","to":"ːminidiscː"},{"from":"💾","to":"ːfloppy_diskː"},{"from":"💿","to":"ːoptical_discː"},{"from":"📀","to":"ːdvdː"},{"from":"📁","to":"ːfile_folderː"},{"from":"📂","to":"ːopen_file_folderː"},{"from":"📃","to":"ːpage_with_curlː"},{"from":"📄","to":"ːpage_facing_upː"},{"from":"📅","to":"ːcalendarː"},{"from":"📆","to":"ːtear-off_calendarː"},{"from":"📇","to":"ːcard_indexː"},{"from":"📈","to":"ːchart_with_upwards_trendː"},{"from":"📉","to":"ːchart_with_downwards_trendː"},{"from":"📊","to":"ːbar_chartː"},{"from":"📋","to":"ːclipboardː"},{"from":"📌","to":"ːpushpinː"},{"from":"📍","to":"ːround_pushpinː"},{"from":"📎","to":"ːpaperclipː"},{"from":"📏","to":"ːstraight_rulerː"},{"from":"📐","to":"ːtriangular_rulerː"},{"from":"📑","to":"ːbookmark_tabsː"},{"from":"📒","to":"ːledgerː"},{"from":"📓","to":"ːnotebookː"},{"from":"📔","to":"ːnotebook_with_decorative_coverː"},{"from":"📕","to":"ːclosed_bookː"},{"from":"📖","to":"ːopen_bookː"},{"from":"📗","to":"ːgreen_bookː"},{"from":"📘","to":"ːblue_bookː"},{"from":"📙","to":"ːorange_bookː"},{"from":"📚","to":"ːbooksː"},{"from":"📛","to":"ːname_badgeː"},{"from":"📜","to":"ːscrollː"},{"from":"📝","to":"ːmemoː"},{"from":"📞","to":"ːtelephone_receiverː"},{"from":"📟","to":"ːpagerː"},{"from":"📠","to":"ːfax_machineː"},{"from":"📡","to":"ːsatellite_antennaː"},{"from":"📢","to":"ːpublic_address_loudspeakerː"},{"from":"📣","to":"ːcheering_megaphoneː"},{"from":"📤","to":"ːoutbox_trayː"},{"from":"📥","to":"ːinbox_trayː"},{"from":"📦","to":"ːpackageː"},{"from":"📧","to":"ːe-mail_symbolː"},{"from":"📨","to":"ːincoming_envelopeː"},{"from":"📩","to":"ːenvelope_with_downwards_arrow_aboveː"},{"from":"📪","to":"ːclosed_mailbox_with_lowered_flagː"},{"from":"📫","to":"ːclosed_mailbox_with_raised_flagː"},{"from":"📮","to":"ːpostboxː"},{"from":"📰","to":"ːnewspaperː"},{"from":"📱","to":"ːmobile_phoneː"},{"from":"📲","to":"ːmobile_phone_with_rightwards_arrow_at_leftː"},{"from":"📳","to":"ːvibration_modeː"},{"from":"📴","to":"ːmobile_phone_offː"},{"from":"📶","to":"ːantenna_with_barsː"},{"from":"📷","to":"ːcameraː"},{"from":"📹","to":"ːvideo_cameraː"},{"from":"📺","to":"ːtelevisionː"},{"from":"📻","to":"ːradioː"},{"from":"📼","to":"ːvideocassetteː"},{"from":"🔃","to":"ːclockwise_downwards_and_upwards_open_circle_arrowsː"},{"from":"🔊","to":"ːspeaker_with_three_sound_wavesː"},{"from":"🔋","to":"ːbatteryː"},{"from":"🔌","to":"ːelectric_plugː"},{"from":"🔍","to":"ːleft-pointing_magnifying_glassː"},{"from":"🔎","to":"ːright-pointing_magnifying_glassː"},{"from":"🔏","to":"ːlock_with_ink_penː"},{"from":"🔐","to":"ːclosed_lock_with_keyː"},{"from":"🔑","to":"ːkeyː"},{"from":"🔒","to":"ːlockː"},{"from":"🔓","to":"ːopen_lockː"},{"from":"🔔","to":"ːbellː"},{"from":"🔖","to":"ːbookmarkː"},{"from":"🔗","to":"ːlink_symbolː"},{"from":"🔘","to":"ːradio_buttonː"},{"from":"🔙","to":"ːback_with_leftwards_arrow_aboveː"},{"from":"🔚","to":"ːend_with_leftwards_arrow_aboveː"},{"from":"🔛","to":"ːon_with_exclamation_mark_with_left_right_arrow_aboveː"},{"from":"🔜","to":"ːsoon_with_rightwards_arrow_aboveː"},{"from":"🔝","to":"ːtop_with_upwards_arrow_aboveː"},{"from":"🔞","to":"ːno_one_under_eighteen_symbolː"},{"from":"🔟","to":"ːkeycap_tenː"},{"from":"🔠","to":"ːinput_symbol_for_latin_capital_lettersː"},{"from":"🔡","to":"ːinput_symbol_for_latin_small_lettersː"},{"from":"🔢","to":"ːinput_symbol_for_numbersː"},{"from":"🔣","to":"ːinput_symbol_for_symbolsː"},{"from":"🔤","to":"ːinput_symbol_for_latin_lettersː"},{"from":"🔥","to":"ːfireː"},{"from":"🔦","to":"ːelectric_torchː"},{"from":"🔧","to":"ːwrenchː"},{"from":"🔨","to":"ːhammerː"},{"from":"🔩","to":"ːnut_and_boltː"},{"from":"🔪","to":"ːhochoː"},{"from":"🔫","to":"ːpistolː"},{"from":"🔮","to":"ːcrystal_ballː"},{"from":"🔯","to":"ːsix_pointed_star_with_middle_dotː"},{"from":"🔰","to":"ːjapanese_symbol_for_beginnerː"},{"from":"🔱","to":"ːtrident_emblemː"},{"from":"🔲","to":"ːblack_square_buttonː"},{"from":"🔳","to":"ːwhite_square_buttonː"},{"from":"🔴","to":"ːlarge_red_circleː"},{"from":"🔵","to":"ːlarge_blue_circleː"},{"from":"🔶","to":"ːlarge_orange_diamondː"},{"from":"🔷","to":"ːlarge_blue_diamondː"},{"from":"🔸","to":"ːsmall_orange_diamondː"},{"from":"🔹","to":"ːsmall_blue_diamondː"},{"from":"🔺","to":"ːup-pointing_red_triangleː"},{"from":"🔻","to":"ːdown-pointing_red_triangleː"},{"from":"🔼","to":"ːup-pointing_small_red_triangleː"},{"from":"🔽","to":"ːdown-pointing_small_red_triangleː"},{"from":"🕐","to":"ːclock_face_one_oclockː"},{"from":"🕑","to":"ːclock_face_two_oclockː"},{"from":"🕒","to":"ːclock_face_three_oclockː"},{"from":"🕓","to":"ːclock_face_four_oclockː"},{"from":"🕔","to":"ːclock_face_five_oclockː"},{"from":"🕕","to":"ːclock_face_six_oclockː"},{"from":"🕖","to":"ːclock_face_seven_oclockː"},{"from":"🕗","to":"ːclock_face_eight_oclockː"},{"from":"🕘","to":"ːclock_face_nine_oclockː"},{"from":"🕙","to":"ːclock_face_ten_oclockː"},{"from":"🕚","to":"ːclock_face_eleven_oclockː"},{"from":"🕛","to":"ːclock_face_twelve_oclockː"},{"from":"🗻","to":"ːmount_fujiː"},{"from":"🗼","to":"ːtokyo_towerː"},{"from":"🗽","to":"ːstatue_of_libertyː"},{"from":"🗾","to":"ːsilhouette_of_japanː"},{"from":"🗿","to":"ːmoyaiː"},{"from":"😀","to":"ːgrinning_faceː"},{"from":"😇","to":"ːsmiling_face_with_haloː"},{"from":"😈","to":"ːsmiling_face_with_hornsː"},{"from":"😎","to":"ːsmiling_face_with_sunglassesː"},{"from":"😐","to":"ːneutral_faceː"},{"from":"😑","to":"ːexpressionless_faceː"},{"from":"😕","to":"ːconfused_faceː"},{"from":"😗","to":"ːkissing_faceː"},{"from":"😙","to":"ːkissing_face_with_smiling_eyesː"},{"from":"😛","to":"ːface_with_stuck-out_tongueː"},{"from":"😟","to":"ːworried_faceː"},{"from":"😦","to":"ːfrowning_face_with_open_mouthː"},{"from":"😧","to":"ːanguished_faceː"},{"from":"😬","to":"ːgrimacing_faceː"},{"from":"😮","to":"ːface_with_open_mouthː"},{"from":"😯","to":"ːhushed_faceː"},{"from":"😴","to":"ːsleeping_faceː"},{"from":"😶","to":"ːface_without_mouthː"},{"from":"🚁","to":"ːhelicopterː"},{"from":"🚂","to":"ːsteam_locomotiveː"},{"from":"🚆","to":"ːtrainː"},{"from":"🚈","to":"ːlight_railː"},{"from":"🚊","to":"ːtramː"},{"from":"🚍","to":"ːoncoming_busː"},{"from":"🚎","to":"ːtrolleybusː"},{"from":"🚐","to":"ːminibusː"},{"from":"🚔","to":"ːoncoming_police_carː"},{"from":"🚖","to":"ːoncoming_taxiː"},{"from":"🚘","to":"ːoncoming_automobileː"},{"from":"🚛","to":"ːarticulated_lorryː"},{"from":"🚜","to":"ːtractorː"},{"from":"🚝","to":"ːmonorailː"},{"from":"🚞","to":"ːmountain_railwayː"},{"from":"🚟","to":"ːsuspension_railwayː"},{"from":"🚠","to":"ːmountain_cablewayː"},{"from":"🚡","to":"ːaerial_tramwayː"},{"from":"🚣","to":"ːrowboatː"},{"from":"🚦","to":"ːvertical_traffic_lightː"},{"from":"🚮","to":"ːput_litter_in_its_place_symbolː"},{"from":"🚯","to":"ːdo_not_litter_symbolː"},{"from":"🚰","to":"ːpotable_water_symbolː"},{"from":"🚱","to":"ːnon-potable_water_symbolː"},{"from":"🚳","to":"ːno_bicyclesː"},{"from":"🚴","to":"ːbicyclistː"},{"from":"🚵","to":"ːmountain_bicyclistː"},{"from":"🚷","to":"ːno_pedestriansː"},{"from":"🚸","to":"ːchildren_crossingː"},{"from":"🚿","to":"ːshowerː"},{"from":"🛁","to":"ːbathtubː"},{"from":"🛂","to":"ːpassport_controlː"},{"from":"🛃","to":"ːcustomsː"},{"from":"🛄","to":"ːbaggage_claimː"},{"from":"🛅","to":"ːleft_luggageː"},{"from":"🌍","to":"ːearth_globe_europe-africaː"},{"from":"🌎","to":"ːearth_globe_americasː"},{"from":"🌐","to":"ːglobe_with_meridiansː"},{"from":"🌒","to":"ːwaxing_crescent_moon_symbolː"},{"from":"🌖","to":"ːwaning_gibbous_moon_symbolː"},{"from":"🌗","to":"ːlast_quarter_moon_symbolː"},{"from":"🌘","to":"ːwaning_crescent_moon_symbolː"},{"from":"🌚","to":"ːnew_moon_with_faceː"},{"from":"🌜","to":"ːlast_quarter_moon_with_faceː"},{"from":"🌝","to":"ːfull_moon_with_faceː"},{"from":"🌞","to":"ːsun_with_faceː"},{"from":"🌲","to":"ːevergreen_treeː"},{"from":"🌳","to":"ːdeciduous_treeː"},{"from":"🍋","to":"ːlemonː"},{"from":"🍐","to":"ːpearː"},{"from":"🍼","to":"ːbaby_bottleː"},{"from":"🏇","to":"ːhorse_racingː"},{"from":"🏉","to":"ːrugby_footballː"},{"from":"🏤","to":"ːeuropean_post_officeː"},{"from":"🐀","to":"ːratː"},{"from":"🐁","to":"ːmouseː"},{"from":"🐂","to":"ːoxː"},{"from":"🐃","to":"ːwater_buffaloː"},{"from":"🐄","to":"ːcowː"},{"from":"🐅","to":"ːtigerː"},{"from":"🐆","to":"ːleopardː"},{"from":"🐇","to":"ːrabbitː"},{"from":"🐈","to":"ːcatː"},{"from":"🐉","to":"ːdragonː"},{"from":"🐊","to":"ːcrocodileː"},{"from":"🐋","to":"ːwhaleː"},{"from":"🐏","to":"ːramː"},{"from":"🐐","to":"ːgoatː"},{"from":"🐓","to":"ːroosterː"},{"from":"🐕","to":"ːdogː"},{"from":"🐖","to":"ːpigː"},{"from":"🐪","to":"ːdromedary_camelː"},{"from":"👥","to":"ːbusts_in_silhouetteː"},{"from":"👬","to":"ːtwo_men_holding_handsː"},{"from":"👭","to":"ːtwo_women_holding_handsː"},{"from":"💭","to":"ːthought_balloonː"},{"from":"💶","to":"ːbanknote_with_euro_signː"},{"from":"💷","to":"ːbanknote_with_pound_signː"},{"from":"📬","to":"ːopen_mailbox_with_raised_flagː"},{"from":"📭","to":"ːopen_mailbox_with_lowered_flagː"},{"from":"📯","to":"ːpostal_hornː"},{"from":"📵","to":"ːno_mobile_phonesː"},{"from":"🔀","to":"ːtwisted_rightwards_arrowsː"},{"from":"🔁","to":"ːclockwise_rightwards_and_leftwards_open_circle_arrowsː"},{"from":"🔂","to":"ːclockwise_rightwards_and_leftwards_open_circle_arrows_with_circled_one_overlayː"},{"from":"🔄","to":"ːanticlockwise_downwards_and_upwards_open_circle_arrowsː"},{"from":"🔅","to":"ːlow_brightness_symbolː"},{"from":"🔆","to":"ːhigh_brightness_symbolː"},{"from":"🔇","to":"ːspeaker_with_cancellation_strokeː"},{"from":"🔉","to":"ːspeaker_with_one_sound_waveː"},{"from":"🔕","to":"ːbell_with_cancellation_strokeː"},{"from":"🔬","to":"ːmicroscopeː"},{"from":"🔭","to":"ːtelescopeː"},{"from":"🕜","to":"ːclock_face_one-thirtyː"},{"from":"🕝","to":"ːclock_face_two-thirtyː"},{"from":"🕞","to":"ːclock_face_three-thirtyː"},{"from":"🕟","to":"ːclock_face_four-thirtyː"},{"from":"🕠","to":"ːclock_face_five-thirtyː"},{"from":"🕡","to":"ːclock_face_six-thirtyː"},{"from":"🕢","to":"ːclock_face_seven-thirtyː"},{"from":"🕣","to":"ːclock_face_eight-thirtyː"},{"from":"🕤","to":"ːclock_face_nine-thirtyː"},{"from":"🕥","to":"ːclock_face_ten-thirtyː"},{"from":"🕦","to":"ːclock_face_eleven-thirtyː"},{"from":"🕧","to":"ːclock_face_twelve-thirtyː"}]
      }
    },
    connect:{
        options: {
            hostname:'localhost',
            livereload:true,
            base: 'dist',
            keepalive:true,
            debug:true,
            open:'http://localhost:8000'
        }
    },
    watch:{
        options: { livereload: true },
        tasks:['replace'],
        files:[
            'Gruntfile.js',
            'package.js',
            'src/*',
            'dist/index.html'
        ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('default', ['replace','connect','watch']);

};
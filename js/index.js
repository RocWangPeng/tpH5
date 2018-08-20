//tool
function $(obj) {
	return document.querySelector(obj)
}

function $A(obj) {
	return document.querySelectorAll(obj)
}

function play(id) {
	wx.ready(function() {

		var player = document.getElementById(id);
		player.play();

	});
}

var dmMp3 = document.getElementById('dmMp3');
var bgMp3 = document.getElementById('bgMp3');
var chMp3 = document.getElementById('chMp3');
var gzMp3 = document.getElementById('pgMp3')
var pgMp3 = document.getElementById('gzMp3')
var etMp3 = document.getElementById('etMp3')
var dxMp3 = document.getElementById('dxMp3')
var anMp3 = document.getElementById('anMp3')
var boomMp3 = document.getElementById('boomMp3')

var gzA = document.getElementById('gzA')
var gzB = document.getElementById('gzB')
var gzC = document.getElementById('gzC')
var gzD = document.getElementById('gzD')

var dxA = document.getElementById('dxA')
var dxB = document.getElementById('dxB')
var dxC = document.getElementById('dxC')
var dxD = document.getElementById('dxD')

var etA = document.getElementById('etA')
var etB = document.getElementById('etB')
var etC = document.getElementById('etC')
var etD = document.getElementById('etD')

var wyC = document.getElementById('wyC')
var qh = document.getElementById('qh')

var piantou = document.getElementById('piantou')
var tsj = document.getElementById('tsj')
var fjj = document.getElementById('fjj')
var zxj = document.getElementById('zxj')

window.onload = function() {

	(
		function() {

			document.addEventListener("WeixinJSBridgeReady", function() {
				dmMp3.play();
				dmMp3.pause();
				bgMp3.play();
				bgMp3.pause();
				chMp3.play();
				chMp3.pause();
				gzMp3.play();
				gzMp3.pause();
				pgMp3.play();
				pgMp3.pause();
				etMp3.play();
				etMp3.pause();
				dxMp3.play();
				dxMp3.pause();
				anMp3.play();
				anMp3.pause();
				boomMp3.play();
				boomMp3.pause();

				gzA.play()
				gzA.pause()
				gzB.play()
				gzB.pause()
				gzC.play()
				gzC.pause()
				gzD.play()
				gzD.pause()

				dxA.play()
				dxA.pause()
				dxB.play()
				dxB.pause()
				dxC.play()
				dxC.pause()
				dxD.play()
				dxD.pause()

				etA.play()
				etA.pause()
				etB.play()
				etB.pause()
				etC.play()
				etC.pause()

				wyC.play()
				wyC.pause()

				qh.play()
				qh.pause()

				piantou.play()
				piantou.pause()

				tsj.play()
				tsj.pause()
				fjj.play()
				fjj.pause()
				zxj.play()
				zxj.pause()

			}, false);
		}
	)();

	//audioAutoPlay('dmMp3');
	setTimeout(function() {
		$('#loading').style.display = 'none'
		dmMp3.play();
		star()
	}, 2000)

}

function star() {
	//两秒时间，让弹幕遮罩过度
	setInterval(function() {
		$('.dmList').style.opacity = 1;
	}, 1500);

	//弹幕显示，开始背景音乐

	//		play('dmMp3')

	//弹幕持续6秒
	setTimeout(function() {
		//爆炸声音
		$('#boomMp3').play();

		$('.dmList').style.display = 'none'
		$('.danmu').style.display = 'none' //弹幕隐藏
//		$('.mq .dhmask').style.display = 'none' //弹幕隐藏

		//6秒后弹幕消失，爆炸层显示
		$('.bz').style.transform = "scale(1)"
		$('.bz').style.opacity = '1'

		//加抖动效果
		setTimeout(function() {
			$('.bz').classList.add("shake-little")
			$('.bz').classList.add("shake-constant")
		}, 200)

		//6秒后+2.5秒，让爆炸层消失，出现三十六计首页
		setTimeout(function() {

			$('.bz').style.transformOrigin = 'center center'
			$('.bz').style.transition = '2.5s'
			$('.bz').style.transform = 'scale(18)'
			$('.bz').style.opacity = '0'
			/*translate3d(0,-500px,1000px) */
			setTimeout(function() {
				$('#bgMp3').play()
				//显示技巧指南
				$('.smzn').style.zIndex = '100';
				$('.smzn').style.transform = 'scale(1)';
				//$('.smzn img').style.transform = 'translateZ(0)';
				$('.smzn').style.opacity = '1';
				$('.xx').style.opacity = '1'
				setTimeout(function() {
					$('.bbgg').style.transform = 'scale(1)';
					$('.bbgg').style.opacity = '1';
					$('.xx').style.opacity = '0'
				}, 2500)
				$('.smzn').addEventListener('touchstart', function() {
					$('.xx').style.display = 'none'
					$('#bgMp3').pause()
					$('.sslj').style.transform = 'scale(1)'
					$('.sslj').style.opacity = '1'
					$('.smzn').style.display = 'none';
					$('#piantou').play()

					setTimeout(function() {
						$('#bgMp3').play()
					}, 2500)

					$('.bz').style.opacity = '0'
					$('.bz').style.display = 'none'

				})

			}, 100)

		}, 2200)

	}, 12000)

	//三十六计首页

	//没钱按钮
	$A('.sjljBtn li')[0].addEventListener('touchstart', function() {
		
		$('#anMp3').play()
		setTimeout(function() {
			$('#bgMp3').pause()
			//插画音频
			$('#chMp3').play()
			//没钱对话框显示
			$('#mq').style.transition = '.1s'
			$('#mq').style.transform = 'scale(1)'

			//	让三十六计首页隐藏
			$('.sslj').style.opacity = '0';
		}, 1000)

		setTimeout(function() {
			$('.sslj').style.display = 'none';
			$('.mq .dhmask').style.transform = 'scale(1)'
		}, 1200)

		setTimeout(function() {
//			$('#mq .mqMask').style.opacity = '1'; 
			//进入对话，1000MM显示遮罩
			
			$('#mq .dhmask').style.opacity = '1';

			setTimeout(function() {
				//移动遮罩至第一句 停留800MM
				$('#mq .dhmask').style.transform = 'translateX(10%)'

				////800MM后 第一句对话，显示
				setTimeout(function() {
					$A('#mq img')[0].style.transform = 'scale(1)'
					gzA.play()

					//第一句对话完成，等待1秒 变换遮罩层角度
					setTimeout(function() {

						$('#mq .dhmask').style.transform = 'translateX(6%)'
						setTimeout(function() {
							$A('#mq img')[1].style.transform = 'scale(1)'
							gzB.play()
							$A('#mq img')[0].style.transform = 'scale(0)'
							setTimeout(function() {

								$('#mq .dhmask').style.transform = 'translateX(-10%)'
								//第一句话隐藏
								$A('#mq img')[1].style.transform = 'scale(0)'

								//停留1秒开始第3句对话
								setTimeout(function() {
									$A('#mq img')[2].style.transform = 'scale(1)'
									gzC.play()
									//C说完，等待1.4变化遮罩
									setTimeout(function() {
										$('#mq .dhmask').style.transform = 'translateX(6%)'
										//最后一句对话
										setTimeout(function() {
											$A('#mq img')[3].style.transform = 'scale(1)'
											gzD.play()
											$A('#mq img')[2].style.transform = 'scale(0)'
											//最后一句说完
											setTimeout(function() {
												//乌鸦												
												wyC.play()

												setTimeout(function() {
													//人物过渡
													$('#mqgd').style.zIndex = '100'
													$('#mqgd').style.transform = 'scale(1)'
													$('#gzMp3').play()

													//对话完成//应该进行拧瓶盖
													setTimeout(function() {
														$('#chMp3').pause()
														$('.smzn').style.transform = 'scale(0)'
														$('#qh').play()
//														$('.nyn').style.transform = 'scale(1)'
														$('.fanshu').style.transform = 'scale(1)'
														$('.mq').style.display = 'none'
														$('.fanshu').addEventListener('touchstart', function() {
															
															$('.fanshu img').className = 'book'
//															npz()
//															setTimeout(function() {
//																$('.ts').classList.add("shake-little");
//																$('.ts').classList.add("shake-constant")
//																$('.pzzz').classList.add("shake-little")
//																$('.pzzz').classList.add("shake-constant")
//															}, 1500)

															//拧完以后，隐藏，显示下一页
															setTimeout(function() {
																$('#pgMp3').pause()

																$('#tsj').play()

																setTimeout(function() {
																	//，开始背景音乐
																	$('#bgMp3').play()
																}, 1200)
																$('#mqj').style.transform = 'scale(1) rotateZ(0)'
																$('.fanshu').style.transform = 'scale(0)'
															}, 1000)

														})


													}, 3500)

												}, 1600)

											}, 3000)

										}, 600)
									}, 2300)

								}, 600)
							}, 1600)

						}, 600)

					}, 1200)

				}, 600)

			}, 1200)

		}, 1000)

	})

	//没对象按钮
	$A('.sjljBtn li')[1].addEventListener('touchstart', function() {
		$('#anMp3').play()
		setTimeout(function() {
			$('#bgMp3').pause()
			//插画音频
			$('#chMp3').play()
			//	让三十六计首页隐藏
			$('.sslj').style.opacity = '0';
			//没对象显示
			$('#met').style.transition = '.1s'
			$('#met').style.transform = 'scale(1)'
		}, 1000)
		setTimeout(function() {
			$('.sslj').style.display = 'none';
			$('.mq .dhmask').style.transform = 'scale(1)'
		}, 1200)

		setTimeout(function() {
			//				$('#met .mqMask').style.opacity = '1';
			//进入对话，1000MM显示遮罩
			$('#met .dhmask').style.opacity = '1';

			//第一句对话，显示
			setTimeout(function() {
				//移动遮罩至第一句 停留800MM
				$('#met .dhmask').style.transform = 'translateX(10%)'

				//第一句对话完成，
				setTimeout(function() {
					//停留1秒显示第一句话
					$A('#met img')[0].style.transform = 'scale(1)'
					dxA.play()

					////停留1秒
					//变换遮罩层角度
					setTimeout(function() {
						$('#met .dhmask').style.transform = 'translateX(-10%)'
						//第1句话隐藏
						$A('#met img')[0].style.transform = 'scale(0)'
						//开始第二句对话
						setTimeout(function() {
							$A('#met img ')[1].style.transform = 'scale(1)';
							dxB.play()
							$A('#met img')[0].style.display = 'none'

							//第二句话完成，等待一秒，变化遮罩
							setTimeout(function() {
								$('#met .dhmask').style.transform = 'translateX(10%)'
								//第2句话隐藏
								$A('#met img')[1].style.transform = 'scale(0)'
								//等待一秒，显示第三句
								setTimeout(function() {
									$A('#met img ')[2].style.transform = 'scale(1)';
									dxC.play()
									$A('#met img')[1].style.display = 'none'
									//第3句话完成，等待4秒，变化遮罩
									setTimeout(function() {
										$('#met .dhmask').style.transform = 'translateX(-10%)'
										//第3句话隐藏
										$A('#met img')[2].style.transform = 'scale(0)'
										//等待一秒，显示第4句
										setTimeout(function() {
											$A('#met img ')[3].style.transform = 'scale(1)';
											dxD.play()
											//第4句话完成，等待一秒
											setTimeout(function() {
												//停留2秒显示顶部
												$('#met .dhmask').style.transform = 'translateX(0)'
												$A('#met img ')[3].style.transform = 'scale(0)';
												wyC.play()
												//两秒后显示过渡
												setTimeout(function() {
													//人物过渡
													$('#dxgd').style.zIndex = '100'
													$('#dxgd').style.transform = 'scale(1)'
													setTimeout(function() {
														$('#chMp3').pause()
														$('#dxMp3').play()

														setTimeout(function() {
															$('#chMp3').play()
															//对话完成//应该进行拧瓶盖
															setTimeout(function() {
																//																	$('.smzn').style.transform = 'scale(0)'
																$('#qh').play()
																$('.fanshu').style.transform = 'scale(1)';
																$('#dxgd').style.transform = 'scale(0)'
																$('#met').style.display = 'none';
																$('.mq').style.display = 'none'

																$('.fanshu').addEventListener('touchstart', function() {
																	$('.fanshu img').className = 'book'
//																	npz();
//																	setTimeout(function() {
//																		$('.ts').classList.add("shake-little");
//																		$('.ts').classList.add("shake-constant")
//																		$('.pzzz').classList.add("shake-little");
//																		$('.pzzz').classList.add("shake-constant")
//																	}, 1500)

																	//拧完以后，隐藏，显示下一页
																	setTimeout(function() {
																		$('#pgMp3').pause()
																		$('#fjj').play()

																		setTimeout(function() {
																			//，开始背景音乐
																			$('#bgMp3').play()
																		}, 1200)

																		$('#mdxj').style.transform = 'scale(1) rotateZ(0)';
																		$('.fanshu').style.transform = 'scale(0)'
//																		$('.nyn').style.display = 'none';
																	}, 1000)

																})

															}, 1500)

															//															})

														}, 1000)

													}, 1500)

												}, 2000)

											}, 3000)

										}, 600)
									}, 2200)

								}, 600)

							}, 2400)

						}, 600)

					}, 1600)

				}, 600)

			}, 1400)

		}, 1000)

	})

	//没二胎按钮
	$A('.sjljBtn li')[2].addEventListener('touchstart', function() {
		$('#anMp3').play()
		setTimeout(function() {
			$('#bgMp3').pause()
			//插画音频
			$('#chMp3').play()
			//	让三十六计首页隐藏
			$('.sslj').style.opacity = '0';
			//没对象显示
			$('#mdx').style.transition = '.1s'
			$('#mdx').style.transform = 'scale(1)'
		}, 1000)
		setTimeout(function() {
			$('.sslj').style.display = 'none';
			$('.mq .dhmask').style.transform = 'scale(1)'
		}, 1200)

		setTimeout(function() {

			//进入对话，1000MM显示遮罩
			$('#mdx .dhmask').style.opacity = '1';

			setTimeout(function() {
				//移动遮罩至第一句 停留800MM
				$('#mdx .dhmask').style.transform = 'translateX(10%)'

				//第一句对话完成，变换遮罩层角度
				setTimeout(function() {

					//第一句对话，显示
					$A('#mdx img')[0].style.transform = 'scale(1)'
					etA.play()

					//留住一秒变化遮罩
					setTimeout(function() {
						$('#mdx .dhmask').style.transform = 'translateX(-10%)'
						//第1句话隐藏
						$A('#mdx img')[0].style.transform = 'scale(0)'
						//留住一秒开始第二句对话
						setTimeout(function() {
							$A('#mdx img')[1].style.transform = 'scale(1)'
							etB.play()
							//过一秒显示第三句
							setTimeout(function() {
								$A('#mdx img')[2].style.transform = 'scale(1)';
								etC.play()
								//第2句话隐藏
								$A('#mdx img')[1].style.transform = 'scale(0)'
								//过2秒变化
								setTimeout(function() {
									$('#mdx .dhmask').style.transform = 'translateX(-8%)'
									setTimeout(function() {
										$A('#mdx img')[3].style.transform = 'scale(1)';
										etD.play()
										$A('#mdx img')[2].style.transform = 'scale(0)';

										//再过一秒显示4句
										setTimeout(function() {
											$('#mdx .dhmask').style.transform = 'translateX(0)'
											//第2句话隐藏
											$A('#mdx img')[3].style.transform = 'scale(0)';
											wyC.play()

											setTimeout(function() {
												//人物过渡
												$('#metgd').style.zIndex = '100';
												$('#metgd').style.transform = 'scale(1)';
												$('#chMp3').pause()

												setTimeout(function() {
													$('#etMp3').play()

													//对话完成//应该进行拧瓶盖
													setTimeout(function() {
														$('#chMp3').play()

														setTimeout(function() {
															$('#qh').play()
															$('#metgd').style.transform = 'scale(0)';
															$('.fanshu').style.transform = 'scale(1)'
															$('#mdx').style.display = 'none';
															$('.mq').style.display = 'none'
															
															$('.fanshu').addEventListener('touchstart', function() {
																$('.fanshu img').className = 'book'
//																npz();
//																setTimeout(function() {
//																	$('.ts').classList.add("shake-little");
//																	$('.ts').classList.add("shake-constant")
//																	$('.pzzz').classList.add("shake-little");
//																	$('.pzzz').classList.add("shake-constant");
//																}, 1500)

																//拧完以后，隐藏，显示下一页
																setTimeout(function() {
																	$('#pgMp3').pause()
																	$('#zxj').play()

																	setTimeout(function() {
																		//，开始背景音乐
																		$('#bgMp3').play()
																	}, 1200)

																	$('#metj').style.transform = 'scale(1) rotateZ(0)'
																	$('.fanshu').style.transform = 'scale(0)'
//																	$('.nyn').style.display = 'none'
																}, 1000)

															})

														}, 2000)

													}, 2000)

												}, 1200)
											}, 1600)

										}, 3000)

									}, 600)
								}, 2200)

							}, 3200)

						}, 600)

					}, 1500)

				}, 600)

			}, 1000)

		}, 500)

	})
}

//拧瓶子
function npz() {
	//插画音频暂停
	$('#chMp3').pause()
	//开盖子声音
	//	setTimeout(function(){
	$('#pgMp3').play()
	//	},200)
	$('.shou').style.animation = 'shou 1.6s infinite';
	$('.gaizin').style.animation = 'gaizi 1.6s infinite';
	$('.ts').style.className = 'ts shake-little shake-constant';
	$('.pzzz').style.className = 'pzzz shake-little shake-constant';
}

//抽奖
function cj() {
	//暂停背景音乐
$('#bgMp3').pause()

	//	$('#chMp3').play()
	//开盖子声音
//	$('#pgMp3').play()
$('#metj').style.display = 'none'
	$('#mdxj').style.display = 'none'
	$('#mqj').style.display = 'none'
	$('#metj').style.transform = 'scale(0)'
	$('#mdxj').style.transform = 'scale(0)'
	$('#mqj').style.transform = 'scale(0)'
	
	$('#metj').style.display = 'none'
	$('#mdxj').style.display = 'none'
	$('#mqj').style.display = 'none'
	
//	$('.gd').style.display = 'block'

//	setTimeout(function() {
//		$('.gdWarp .gaize').style.animation = 'gaizi 1s infinite'
//	}, 1000)

//	setTimeout(function() {
//		//		$('.gai03').style.animation = 'fei .9s infinite ease-out'
//		$('.gdWarp .gaize').style.animation = 'fei 1s ease-out'
//		//		$('.gdWarp .gaize').style.transform = 'translate(500px,0px)'
//	}, 2200)

	//抽奖
	setTimeout(function() {
		$('#pgMp3').pause()
//		$('.gd').style.display = 'none'
		$('.cj').style.display = 'block'
		$('#pgMp3').pause()
		$('#bgMp3').play()
	}, 100)
}
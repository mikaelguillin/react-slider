import React from 'react';
import SearchIcon from '../../icons/SearchIcon';
import PlayIcon from '../../icons/PlayIcon';

import './slide.scss';

class Slide extends React.Component {

	render() {
		return(
			<div className="swiper-slide">
				<a href={this.props.slide.link}>
					<article>
						{this.props.slide.img &&
							<div>
								<img src={this.props.slide.img} alt="" />
								
								{this.props.slide.type === 'image' ? (
									<div className="swiper-slide__imageIcon">
										<SearchIcon />
								    </div>
								) : (
									<div className="swiper-slide__videoIcon">
										<PlayIcon />
									</div>
								)}
							</div>
						}

						{this.props.slide.quote &&
							<q>{this.props.slide.quote}</q>
						}
					</article>
				</a>
			</div>
		)
	}
}

export default Slide;
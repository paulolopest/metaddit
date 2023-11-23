import React from 'react';
import * as Icon from '@phosphor-icons/react';

const CmtInfoRules = ({ community }) => {
	const [showDesc, setShowDesc] = React.useState({ show: false, ind: 0 });

	const handleClick = (index) => {
		setShowDesc({ show: !showDesc.show, ind: index });
	};

	console.log(showDesc);

	const ruleMap = community?.data?.rules.map((rule, index) => {
		return (
			<div onClick={() => handleClick(index)} className="cmt-rules-card" key={rule.title}>
				<div>
					<p>
						{index + 1}. {rule.title}
					</p>
					<Icon.CaretDown />
				</div>

				{showDesc.show && index === showDesc.ind && <span>{rule.description}</span>}
			</div>
		);
	});
	return (
		<div className="cmt-if-rules">
			<p>Regras do m/{community?.data?.name}</p>

			<div className="cmt-if-rules-ctr">{ruleMap}</div>
		</div>
	);
};

export default CmtInfoRules;

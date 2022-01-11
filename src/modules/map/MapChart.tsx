import React, { memo, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { colors, getPTBRCountryName, roundPopulation } from '../../utils';
import { mapData } from '../../utils/data';
import Container from './styles';

interface Props {
  setTooltipContent: any;
  onClick?: (params: any) => void;
  highlighted?: string;
}

const MapChart : React.FC<Props> = ({ setTooltipContent, onClick, highlighted }: Props) => {
  const [countrySelected, setCountrySelected] = useState('');

  const handleOnClick = (value: any) => (onClick ? onClick(value) : null);
  return (
    <Container>
      <ComposableMap projection="geoMercator" data-tip="" projectionConfig={{ scale: 128 }}>
        <Geographies geography={mapData}>
          {({ geographies }: any) =>
            geographies.map((geo: any) => {
              const isHighlighted = geo.properties.ISO_A2 === highlighted;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    const namePTBR = getPTBRCountryName(NAME);
                    setTooltipContent(`${namePTBR} — ${roundPopulation(POP_EST)}`);
                    setCountrySelected({
                      ...geo.properties,
                      NAME: namePTBR,
                    });
                  }}
                  onClick={() => handleOnClick(countrySelected)}
                  onMouseLeave={() => {
                    setTooltipContent('');
                    setCountrySelected('');
                  }}
                  fill={isHighlighted ? colors.orange : colors.mapItem}
                  style={{
                    default: {
                      outline: 'none',
                    },
                    hover: {
                      outline: 'none',
                    },
                    pressed: {
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </Container>
  );
};

export default memo(MapChart);

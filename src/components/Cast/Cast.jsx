import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/MovieApi';
import Loader from 'components/Loader/Loader';
import { List, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchActors = async () => {
      setLoading(true);

      try {
        const actorsData = await fetchCast(movieId);
        setActors(actorsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, [movieId]);

  return (
    <div>
      {loading ? <Loader /> : null}

      <List>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `	https://www.kinofilms.ua/ukr/movie/687355/?photo=751821&g=m687355_5.jpg`
              }
              alt={original_name}
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Cast;

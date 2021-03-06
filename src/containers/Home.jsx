import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../componets/Search';
import Categories from '../componets/Categories';
import Carousel from '../componets/Carousel';
import CarouselItem from '../componets/CarouselItem';

const Home = ({ mylist, trends, originals, search, buscando }) => {
  console.log(search.length);
  console.log(buscando);
  return (
    <div className='App'>

      <Search isHome />

      {
        search.length > 0 ? (
          <Categories title='Resultado de busqueda'>
            <Carousel>
              {search.map((item) => (
                <CarouselItem
                  key={item.id}
                  id={item.id}
                  cover={item.cover}
                  title={item.title}
                  year={item.year}
                  contentRating={item.contentRating}
                  duration={item.duration}
                />
              ))}
            </Carousel>
          </Categories>
        ) : buscando && <h1>Video no encontrado</h1>

      }

      {mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem
                key={item.id}
                id={item.id}
                cover={item.cover}
                title={item.title}
                year={item.year}
                contentRating={item.contentRating}
                duration={item.duration}
                isList={true}
              />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem
              key={item.id}
              id={item.id}
              cover={item.cover}
              title={item.title}
              year={item.year}
              contentRating={item.contentRating}
              duration={item.duration}
            />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem
              key={item.id}
              id={item.id}
              cover={item.cover}
              title={item.title}
              year={item.year}
              contentRating={item.contentRating}
              duration={item.duration}
            />
          ))}
        </Carousel>
      </Categories>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    search: state.searchResult,
    buscando: state.buscando,
  };
};

export default connect(mapStateToProps, null)(Home);

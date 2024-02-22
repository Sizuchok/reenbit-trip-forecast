import MainLayout from '../common/components/layouts/main-layout'
import SearchBar from '../common/components/search-bar'
import TodaysWeather from '../trip/components/todays-weather'
import TripForecastList from '../trip/components/trip-forecast-list'
import TripList from '../trip/components/trip-list/trip-list'

const MainPage = () => {
  return (
    <MainLayout>
      <main className="grid grid-cols-[minmax(25rem,_1fr)_minmax(18.75rem,_25rem)] mx-12 gap-12 ">
        <div>
          <header>
            <h1 className="mt-4 mb-8 text-2xl font-light">
              Weather <span className="font-bold">Forecast</span>
            </h1>
            <SearchBar />
          </header>
          <TripList />
          <TripForecastList />
        </div>
        <TodaysWeather />
      </main>
    </MainLayout>
  )
}
export default MainPage

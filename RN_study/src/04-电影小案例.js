import { Text, View, StyleSheet, FlatList, Dimensions, ActivityIndicator } from 'react-native'
import { queryMovies, randomRefreshMovies } from '../api/service'
import { useEffect, useState } from 'react'
import MovieItemCell from './movieItemCell'
// 获取屏幕的宽度
export const width = Dimensions.get('window').width
export default function App() {
  const [moviesList, setMoviesList] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [isRefresh, setIsRefresh] = useState(false)
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  let totalPage = 5 // 总页数
  useEffect(() => {
    // 模拟请求数据
    setTimeout(() => {
      const res = queryMovies(pageNo, pageSize)
      setMoviesList(res)
      setLoaded(true)
    }, 1000)
  }, [])

  // 渲染标题
  function renderTitle() {
    return (
      <View style={styles.barStyle}>
        <Text style={styles.txtStyle}>电影列表</Text>
      </View>
    )
  }
  // 渲染加载中
  function renderLoad() {
    // 如果在加载中 显示
    if (!loaded) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' color='red' />
          <Text style={{ paddingLeft: 10, color: '#666' }}>数据加载中</Text>
        </View>
      )
    }
  }
  // 渲染电影列表
  function renderMoviesList() {
    return (
      <FlatList
        data={moviesList}
        renderItem={({ item }) => {
          return <MovieItemCell movie={item} onPress={() => { alert('点击了电影:' + item.title) }} />
        }}
        keyExtractor={(item) => item.id}
        onRefresh={onRefresh}
        refreshing={isRefresh}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    )
  }
  // 下拉刷新
  function onRefresh() {
    setIsRefresh(true)
    const res = randomRefreshMovies()
    setTimeout(() => {
      setMoviesList([...res, ...moviesList])
      setIsRefresh(false)
    }, 1000);
  }
  // 上拉加载更多
  function loadMore() {
    if(pageNo < totalPage) {
      const res = queryMovies(pageNo + 1, pageSize)
      setPageNo(pageNo => pageNo + 1)
      setMoviesList([...moviesList, ...res])
    }else {
      console.log('没有更多了');
    }
    
  }
  return (
    <View style={styles.flex}>
      {/* 渲染标题 */}
      {renderTitle()}
      {/* 加载中 */}
      {renderLoad()}
      {/* 渲染列表 */}
      {renderMoviesList()}
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#268dcd",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "row",
  },
  barStyle: {
    height: 60,
    paddingTop: 30,
    width: width,
    justifyContent: "center",
    backgroundColor: "#268dcd",
  },
  txtStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});
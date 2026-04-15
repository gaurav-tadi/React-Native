import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  repoName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#57606a',
    marginTop: 4,
  },
  tagText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
     backgroundColor: '#0366d6',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginVertical: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2328',
  },
  statLabel: {
    fontSize: 12,
    color: '#57606a',
    marginTop: 2,
  },
});

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
};

const RepositoryItem = ({data}) => {
    return(
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
              <Image 
                source={{ uri: data.ownerAvatarUrl}} 
                style={styles.avatar} 
              />
              <View style={styles.titleContainer}>
                <Text style={styles.repoName}>{data.fullName}</Text>
                <Text style={styles.description}>{data.description}</Text>
              <Text style={styles.tagText}>{data.language}</Text>
              </View>
            </View>

            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{formatNumber(data.stargazersCount)}</Text>
                <Text style={styles.statLabel}>Stars</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{formatNumber(data.forksCount)}</Text>
                <Text style={styles.statLabel}>Forks</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{formatNumber(data.reviewCount)}</Text>
                <Text style={styles.statLabel}>Reviews</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{formatNumber(data.ratingAverage)}</Text>
                <Text style={styles.statLabel}>Rating</Text>
              </View>
            </View>
        </View>
      </View>
    )
};

export default RepositoryItem;

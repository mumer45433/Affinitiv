 

import { StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
// ================== Custom Drawer Styles ==================
export const customDrawerStyles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#fff',
  },
  drawerHeader: {
    padding: 15,
    backgroundColor: '#2f95dc',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderRadius: 4,
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  drawerSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  userSection: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetails: {
    marginLeft: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  dealershipSection: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 5,
  },
  dealershipInfo: {
    borderWidth: 0.8,
    borderColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  dealershipDetails: {
    marginLeft: 15,
  },
  dealershipName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  dealershipLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
   logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    color: '#2f95dc',
  },
});

// ================== Example: Login Screen Styles ==================
export const loginscreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageSection: {
    height: height * 0.4, // 40% of screen
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  formSection: {
    height: height * 0.65, // Slightly increased to accommodate rounded corners
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    borderTopLeftRadius: 30, // Rounded corners on top
    borderTopRightRadius: 30,
    marginTop: -30, // Pull up to overlap the image slightly
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 24,
  },
    loginText: {
    fontSize: 30,
    color: '#202124',
    textAlign: 'center',
    marginBottom: 4,
    fontWeight:'bold'
 
  },
  welcomeText: {
    fontSize: 18,
    color: '#202124',
    textAlign: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dadce0',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#202124',
  },
  inputError: {
    borderColor: '#d32f2f',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 8,
    color: '#5f6368',
  },
  forgotPasswordText: {
    color: '#1a73e8',
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#1a73e8',
    borderRadius: 4,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionText: {
    textAlign: 'center',
    color: '#5f6368',
    fontSize: 12,
  },
});


// ================== Example: Generic Screen Styles ==================
export const screenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});




// ================== Example: Dashboard Screen Styles ==================
export const dashboardscreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

   header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: '#fff',
    marginTop: 25,  
  },
  titleContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  iconBoxGray: {
    width: 48,
    height: 48,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBoxBlack: {
    width: 48,
    height: 48,
    backgroundColor: '#000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

   yellowSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eab308',
    padding: 16,
  },
  actionCard: {
    width: '30%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionText: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },

   performanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  performanceTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  performanceDate: {
    fontSize: 14,
    color: '#666',
  },
  performanceCard: {
    marginTop: 10,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#eee',
  },
  performanceSectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#eee',
    // marginBottom:40
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#000',
  },
  cardNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: '#6b21a8',  
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemLabel: {
    fontSize: 14,
    color: '#444',
  },
  itemValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
  highlightGreen: {
    color: 'green',
    backgroundColor: 'rgba(0,200,0,0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
});

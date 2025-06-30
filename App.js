import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const MetaEdgeNYSCGuide = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [fadeAnim] = useState(new Animated.Value(1));
  // Data Arrays
  const menuItems = [
    {
      title: 'Camp Guide',
      subtitle: 'Essential camp information',
      icon: 'book',
      color: '#059669',
      page: 'guide',
    },
    {
      title: 'Food Timetable',
      subtitle: 'Daily meal schedules',
      icon: 'restaurant',
      color: '#EA580C',
      page: 'food',
    },
    {
      title: 'Orientation',
      subtitle: 'Weekly activities program',
      icon: 'calendar',
      color: '#7C3AED',
      page: 'orientation',
    },
    {
      title: 'Rules & Regulations',
      subtitle: "Camp dos and don'ts",
      icon: 'shield-checkmark',
      color: '#DC2626',
      page: 'rules',
    },
    {
      title: 'Camp Checklist',
      subtitle: 'What to bring to camp',
      icon: 'document-text',
      color: '#2563EB',
      page: 'checklist',
    },
    {
      title: 'Emergency Info',
      subtitle: 'Important contacts',
      icon: 'alert-circle',
      color: '#B91C1C',
      page: 'emergency',
    },
  ];

  const quickTips = [
    '💡 Always carry your call-up letter and ID',
    '🏃‍♂️ Participate actively in all camp activities',
    '🤝 Make friends from different states and cultures',
    '📱 Keep your phone charged for emergencies',
    '💧 Stay hydrated and drink clean water only',
  ];

  const campGuideData = [
    {
      title: 'Before Leaving Home',
      content: [
        {
          title: 'Required Documentation',
          content:
            'Bring your original call-up letter, degree certificate, NYSC medical form, passport photographs (8 copies), and valid means of identification.',
        },
        {
          title: 'Essential Items',
          content:
            'Pack white canvas shoes, jungle boots, white round-neck t-shirts, white shorts, toiletries, mosquito net, and personal medications.',
        },
        {
          title: 'Financial Preparation',
          content:
            'Carry sufficient cash for transport, feeding, and other incidentals. Note that ATM services may be limited in some camps.',
        },
        {
          title: 'Health Preparation',
          content:
            "Complete your medical examination, get necessary vaccinations, and ensure you're physically fit for camp activities.",
        },
      ],
    },
    {
      title: 'Registration Process',
      content: [
        {
          title: 'Document Verification',
          content:
            'Present all required documents at the registration desk. Ensure your certificates are authentic and properly signed.',
        },
        {
          title: 'Medical Screening',
          content:
            'Undergo medical examination including blood pressure check, general health assessment, and fitness evaluation.',
        },
        {
          title: 'Biometric Capture',
          content:
            'Complete fingerprinting and photograph capture for your discharge certificate and ID card.',
        },
        {
          title: 'Platoon Assignment',
          content:
            "You'll be assigned to a platoon based on your course of study and camp logistics.",
        },
      ],
    },
    {
      title: 'Daily Camp Life',
      content: [
        {
          title: 'Morning Parade',
          content:
            'Mandatory 6:00 AM assembly for physical exercises, announcements, and uniform inspection.',
        },
        {
          title: 'Lectures and Seminars',
          content:
            'Attend lectures on entrepreneurship, leadership, civic education, and national development.',
        },
        {
          title: 'Skill Acquisition',
          content:
            'Choose from various vocational skills like computer training, tailoring, agriculture, or baking.',
        },
        {
          title: 'Community Development',
          content:
            'Participate in community service projects and outreach programs in nearby communities.',
        },
      ],
    },
    {
      title: 'Health and Safety',
      content: [
        {
          title: 'Camp Clinic',
          content:
            'Visit the medical center for any health issues. Free medical services are available 24/7.',
        },
        {
          title: 'Water and Food Safety',
          content:
            'Drink only treated water and eat meals from approved vendors to prevent foodborne illnesses.',
        },
        {
          title: 'Personal Security',
          content:
            'Keep your valuables secure, avoid isolated areas at night, and report suspicious activities immediately.',
        },
        {
          title: 'Emergency Procedures',
          content:
            'Know the location of fire exits, assembly points, and emergency contact numbers.',
        },
      ],
    },
  ];

  const foodTimeTable = [
    {
      day: 'Monday',
      meals: [
        {
          time: '6:30 AM',
          meal: 'Breakfast',
          description: 'Bread, tea/coffee, boiled eggs or akamu',
        },
        {
          time: '12:30 PM',
          meal: 'Lunch',
          description: 'Jollof rice, fried rice, or beans with stew',
        },
        {
          time: '6:30 PM',
          meal: 'Dinner',
          description: 'Yam and egg sauce or beans and plantain',
        },
      ],
    },
    {
      day: 'Tuesday',
      meals: [
        {
          time: '6:30 AM',
          meal: 'Breakfast',
          description: 'Akamu (pap), bread, tea, or cornflakes',
        },
        {
          time: '12:30 PM',
          meal: 'Lunch',
          description: 'White rice and stew with chicken or fish',
        },
        {
          time: '6:30 PM',
          meal: 'Dinner',
          description: 'Spaghetti with sauce or noodles',
        },
      ],
    },
    {
      day: 'Wednesday',
      meals: [
        {
          time: '6:30 AM',
          meal: 'Breakfast',
          description: 'Oatmeal, milk, bread, or tea',
        },
        {
          time: '12:30 PM',
          meal: 'Lunch',
          description: 'Fried rice with chicken, salad, and fruit',
        },
        {
          time: '6:30 PM',
          meal: 'Dinner',
          description: 'Beans and rice (waakye) with fish',
        },
      ],
    },
    {
      day: 'Thursday',
      meals: [
        {
          time: '6:30 AM',
          meal: 'Breakfast',
          description: 'Bread, butter, jam, tea, or coffee',
        },
        {
          time: '12:30 PM',
          meal: 'Lunch',
          description: 'Local rice with palm nut soup and meat',
        },
        {
          time: '6:30 PM',
          meal: 'Dinner',
          description: 'Semovita with vegetable soup and protein',
        },
      ],
    },
    {
      day: 'Friday',
      meals: [
        {
          time: '6:30 AM',
          meal: 'Breakfast',
          description: 'Cornflakes, milk, bread, or akamu',
        },
        {
          time: '12:30 PM',
          meal: 'Lunch',
          description: 'Jollof rice with chicken and coleslaw',
        },
        {
          time: '6:30 PM',
          meal: 'Dinner',
          description: 'Yam and tomato sauce with fish',
        },
      ],
    },
    {
      day: 'Saturday',
      meals: [
        {
          time: '7:00 AM',
          meal: 'Breakfast',
          description: 'Tea, bread, egg, or local breakfast',
        },
        {
          time: '1:00 PM',
          meal: 'Lunch',
          description: 'Special weekend meal - varies by camp',
        },
        {
          time: '7:00 PM',
          meal: 'Dinner',
          description: 'Light meal - noodles or bread',
        },
      ],
    },
    {
      day: 'Sunday',
      meals: [
        {
          time: '7:00 AM',
          meal: 'Breakfast',
          description: 'Special Sunday breakfast',
        },
        {
          time: '1:00 PM',
          meal: 'Lunch',
          description: 'Sunday special - rice and chicken',
        },
        { time: '7:00 PM', meal: 'Dinner', description: 'Light evening meal' },
      ],
    },
  ];

  const nutritionTips = [
    '🥗 Eat a variety of foods to get balanced nutrition',
    '💧 Drink at least 8 glasses of water daily',
    '🍎 Supplement with fruits and vegetables when available',
    '🥛 Take calcium-rich foods for strong bones',
    '🍯 Avoid too much sugar and processed foods',
  ];

  const orientationData = [
    {
      week: 'Week 1: Arrival & Orientation',
      activities: [
        {
          time: 'Day 1-2',
          activity: 'Registration & Documentation',
          description:
            'Complete registration process, document verification, and medical screening',
        },
        {
          time: 'Day 3',
          activity: 'Welcome Ceremony',
          description:
            'Official opening ceremony with camp commandant address and orientation overview',
        },
        {
          time: 'Day 4-5',
          activity: 'Camp Familiarization',
          description:
            'Camp tour, facility orientation, safety briefing, and platoon assignment',
        },
        {
          time: 'Day 6-7',
          activity: 'Skill Acquisition Intro',
          description:
            'Introduction to available vocational skills and initial selection process',
        },
      ],
    },
    {
      week: 'Week 2: Training & Development',
      activities: [
        {
          time: 'Daily 6:00 AM',
          activity: 'Morning Parade',
          description:
            'Physical exercises, announcements, uniform inspection, and national anthem',
        },
        {
          time: '8:00-11:00 AM',
          activity: 'Lectures & Seminars',
          description:
            'Entrepreneurship, leadership, civic education, and national issues',
        },
        {
          time: '2:00-5:00 PM',
          activity: 'Skill Acquisition',
          description: 'Intensive vocational training in chosen skill areas',
        },
        {
          time: '6:00-8:00 PM',
          activity: 'Cultural Activities',
          description:
            'Traditional dances, drama, cultural exchange, and talent shows',
        },
      ],
    },
    {
      week: 'Week 3: Assessment & Preparation',
      activities: [
        {
          time: 'Monday-Tuesday',
          activity: 'Community Development',
          description: 'Community outreach programs and environmental projects',
        },
        {
          time: 'Wednesday',
          activity: 'Skills Assessment',
          description:
            'Practical examination and certification of acquired skills',
        },
        {
          time: 'Thursday',
          activity: 'Sports & Recreation',
          description: 'Inter-platoon competitions and recreational activities',
        },
        {
          time: 'Friday',
          activity: 'Passing Out Parade',
          description:
            'Graduation ceremony and preparation for primary assignment',
        },
      ],
    },
  ];

  const campRules = [
    {
      category: 'General Conduct & Discipline',
      rules: [
        'Respect all camp officials, military personnel, and fellow corps members',
        'Maintain proper dress code during official activities and parades',
        'Participate actively in all scheduled camp programs and activities',
        'Keep your accommodation area and camp surroundings clean at all times',
        'Report any suspicious activities or security concerns immediately',
      ],
    },
    {
      category: 'Accommodation & Personal Behavior',
      rules: [
        'No fighting, bullying, or aggressive behavior towards other corps members',
        'Consumption of alcohol and illegal substances is strictly prohibited',
        'Observe lights-out time and maintain quiet hours (10:00 PM - 5:00 AM)',
        'Unauthorized movement outside camp premises is not allowed',
        'Mobile phones must be on silent mode during lectures and parades',
      ],
    },
    {
      category: 'Health, Safety & Hygiene',
      rules: [
        'Report any illness or injury to the camp medical center immediately',
        'Do not share personal items like towels, clothes, or eating utensils',
        'Maintain excellent personal hygiene and use provided sanitation facilities',
        'Follow all safety instructions during physical activities and drills',
        'Avoid consuming food and water from unauthorized sources outside camp',
      ],
    },
    {
      category: 'Documentation & Camp Property',
      rules: [
        'Always carry your call-up letter and identification documents',
        'Do not damage or misuse camp property, facilities, or equipment',
        'Take proper care of issued uniforms and return them in good condition',
        "Respect other corps members' personal belongings and privacy",
        'Submit all required forms and documentation within specified deadlines',
      ],
    },
  ];

  const checklistData = [
    {
      category: 'Essential Documents',
      items: [
        'NYSC call-up letter (original and photocopies)',
        'Degree certificate (original and photocopies)',
        'NYSC medical fitness certificate',
        'Passport photographs (minimum 8 copies)',
        "Valid means of identification (voter's card, driver's license, etc.)",
        'Birth certificate or age declaration',
        'Marriage certificate (if applicable)',
      ],
    },
    {
      category: 'Clothing & Uniforms',
      items: [
        'White canvas shoes (2 pairs)',
        'Jungle boots (1 pair)',
        'White round-neck t-shirts (6 pieces)',
        'White shorts (3 pairs)',
        'Khaki uniform materials (3 yards)',
        'Casual wear for weekends',
        'Underwear and socks',
        'Sweater or cardigan for cold weather',
      ],
    },
    {
      category: 'Personal Care & Health',
      items: [
        'Toiletries (soap, toothbrush, toothpaste, shampoo)',
        'Towels (2-3 pieces)',
        'Mosquito net',
        'Insect repellent',
        'Personal medications',
        'First aid kit',
        'Sanitary pads (for ladies)',
        'Sunscreen lotion',
      ],
    },
    {
      category: 'Bedding & Accommodation',
      items: [
        'Bedsheets and pillowcases',
        'Pillow',
        'Blanket',
        'Mattress (if not provided)',
        'Bucket for bathing',
        'Padlock for your box',
        'Flashlight with batteries',
        'Extension cord/power bank',
      ],
    },
    {
      category: 'Study & Recreation',
      items: [
        'Notebooks and writing materials',
        'Books for personal development',
        'Calculator (if needed)',
        'Camera for memories',
        'Musical instruments (if talented)',
        'Sports equipment (if interested)',
        'Games and recreational items',
      ],
    },
  ];

  const emergencyContacts = [
    {
      service: 'Police Emergency',
      number: '199',
      description: 'For security emergencies and criminal activities',
    },
    {
      service: 'Fire Service',
      number: '199',
      description: 'For fire emergencies and rescue operations',
    },
    {
      service: 'Medical Emergency',
      number: '199',
      description: 'For urgent medical situations',
    },
    {
      service: 'NYSC Headquarters',
      number: '09-4130201',
      description: 'For NYSC-related issues and complaints',
    },
  ];

  const emergencyProcedures = [
    {
      situation: 'Medical Emergency',
      steps: [
        'Remain calm and assess the situation',
        'Call for help immediately',
        'Take the person to the camp clinic',
        'If serious, call emergency services',
        "Notify camp officials and the person's family",
      ],
    },
    {
      situation: 'Fire Emergency',
      steps: [
        'Raise the alarm immediately',
        'Evacuate the area calmly',
        'Call the fire service',
        'Use fire extinguishers if safe to do so',
        'Assemble at designated meeting points',
      ],
    },
    {
      situation: 'Security Threat',
      steps: [
        'Do not panic or confront the threat',
        'Alert security personnel immediately',
        'Move to a safe location',
        'Follow instructions from camp officials',
        'Report the incident properly',
      ],
    },
  ];

  const navigateTo = (page) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setCurrentPage(page);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });
  };

  const Header = () => (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        {currentPage !== 'home' && (
          <TouchableOpacity
            onPress={() => {
              navigateTo('home');
              setCurrentPage('home');
            }}
            style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>MetaEdge NYSC Guide</Text>
        <View style={styles.starContainer}>
          <Ionicons name="star" size={20} color="#FCD34D" />
        </View>
      </View>
    </View>
  );

  const HomePage = () => (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeIcon}>
            <Text style={styles.welcomeEmoji}>🎓</Text>
          </View>
          <Text style={styles.welcomeTitle}>Welcome to NYSC Camp!</Text>
          <Text style={styles.welcomeSubtitle}>
            Your complete guide to National Youth Service Corps
          </Text>
        </View>

        {/* Menu Cards */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigateTo(item.page);
                setCurrentPage(item.page);
              }}
              style={[styles.menuCard, { backgroundColor: item.color }]}
              activeOpacity={0.8}>
              <View style={styles.menuIconContainer}>
                <Ionicons name={item.icon} size={32} color="white" />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="white" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Tips */}
        <View style={styles.tipsContainer}>
          <View style={styles.tipsHeader}>
            <Ionicons name="alert-circle" size={24} color="#059669" />
            <Text style={styles.tipsTitle}>Quick Tips</Text>
          </View>
          {quickTips.map((tip, index) => (
            <View key={index} style={styles.tipCard}>
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );

  const CampGuidePage = () => (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageHeader}>
          <Ionicons name="book" size={48} color="#059669" />
          <Text style={styles.pageTitle}>NYSC Camp Guide</Text>
          <Text style={styles.pageSubtitle}>
            Everything you need to know about camp life
          </Text>
        </View>

        {campGuideData.map((section, index) => (
          <View key={index} style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Ionicons name="checkmark-circle" size={24} color="#059669" />
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
            {section.content.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.contentItem}>
                <Text style={styles.contentTitle}>• {item.title}</Text>
                <Text style={styles.contentText}>{item.content}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );

  const FoodTablePage = () => (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageHeader}>
          <Ionicons name="restaurant" size={48} color="#EA580C" />
          <Text style={styles.pageTitle}>Camp Food Timetable</Text>
          <Text style={styles.pageSubtitle}>
            Weekly meal schedule and nutrition info
          </Text>
        </View>

        {foodTimeTable.map((day, index) => (
          <View key={index} style={styles.sectionCard}>
            <Text
              style={[
                styles.sectionTitle,
                { color: '#EA580C', textAlign: 'center' },
              ]}>
              {day.day}
            </Text>
            {day.meals.map((meal, mealIndex) => (
              <View key={mealIndex} style={styles.mealItem}>
                <Text style={styles.mealTime}>{meal.time}</Text>
                <View style={styles.mealDetails}>
                  <Text style={styles.mealName}>{meal.meal}</Text>
                  <Text style={styles.mealDescription}>{meal.description}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="heart" size={24} color="#EA580C" />
            <Text style={[styles.sectionTitle, { color: '#EA580C' }]}>
              Nutrition Tips
            </Text>
          </View>
          {nutritionTips.map((tip, index) => (
            <View
              key={index}
              style={[styles.tipCard, { backgroundColor: '#FED7AA' }]}>
              <Text style={[styles.tipText, { color: '#9A3412' }]}>{tip}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );

  const OrientationPage = () => (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageHeader}>
          <Ionicons name="calendar" size={48} color="#7C3AED" />
          <Text style={styles.pageTitle}>Orientation Programme</Text>
          <Text style={styles.pageSubtitle}>
            3-week structured camp activities
          </Text>
        </View>

        {orientationData.map((week, index) => (
          <View key={index} style={styles.sectionCard}>
            <Text style={[styles.sectionTitle, { color: '#7C3AED' }]}>
              {week.week}
            </Text>
            {week.activities.map((activity, actIndex) => (
              <View key={actIndex} style={styles.activityItem}>
                <View style={styles.activityHeader}>
                  <Text style={styles.activityName}>{activity.activity}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
                <Text style={styles.activityDescription}>
                  {activity.description}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );

  const RulesPage = () => (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageHeader}>
          <Ionicons name="shield-checkmark" size={48} color="#DC2626" />
          <Text style={styles.pageTitle}>Camp Rules & Regulations</Text>
          <Text style={styles.pageSubtitle}>
            Important guidelines for camp life
          </Text>
        </View>

        {campRules.map((category, index) => (
          <View key={index} style={styles.sectionCard}>
            <Text style={[styles.sectionTitle, { color: '#DC2626' }]}>
              {category.category}
            </Text>
            {category.rules.map((rule, ruleIndex) => (
              <View key={ruleIndex} style={styles.ruleItem}>
                <Text style={styles.ruleNumber}>{ruleIndex + 1}.</Text>
                <Text style={styles.ruleText}>{rule}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );

  const ChecklistPage = () => (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageHeader}>
          <Ionicons name="document-text" size={48} color="#2563EB" />
          <Text style={styles.pageTitle}>Camp Checklist</Text>
          <Text style={styles.pageSubtitle}>
            Essential items to bring to camp
          </Text>
        </View>

        {checklistData.map((category, index) => (
          <View key={index} style={styles.sectionCard}>
            <Text style={[styles.sectionTitle, { color: '#2563EB' }]}>
              {category.category}
            </Text>
            {category.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.checklistItem}>
                <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
                <Text style={styles.checklistText}>{item}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );

  const EmergencyPage = () => (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageHeader}>
          <Ionicons name="alert-circle" size={48} color="#DC2626" />
          <Text style={styles.pageTitle}>Emergency Information</Text>
          <Text style={styles.pageSubtitle}>
            Important contacts and procedures
          </Text>
        </View>

        <View style={styles.sectionCard}>
          <Text style={[styles.sectionTitle, { color: '#DC2626' }]}>
            Emergency Contacts
          </Text>
          {emergencyContacts.map((contact, index) => (
            <View key={index} style={styles.emergencyItem}>
              <Text style={styles.emergencyService}>{contact.service}</Text>
              <Text style={styles.emergencyNumber}>{contact.number}</Text>
              <Text style={styles.emergencyDescription}>
                {contact.description}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionCard}>
          <Text style={[styles.sectionTitle, { color: '#DC2626' }]}>
            Emergency Procedures
          </Text>
          {emergencyProcedures.map((procedure, index) => (
            <View key={index} style={styles.procedureItem}>
              <Text style={styles.procedureTitle}>{procedure.situation}</Text>
              {procedure.steps.map((step, stepIndex) => (
                <Text key={stepIndex} style={styles.procedureStep}>
                  {stepIndex + 1}. {step}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'guide':
        return <CampGuidePage />;
      case 'food':
        return <FoodTablePage />;
      case 'orientation':
        return <OrientationPage />;
      case 'rules':
        return <RulesPage />;
      case 'checklist':
        return <ChecklistPage />;
      case 'emergency':
        return <EmergencyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#059669" />
      <Header />
      {renderCurrentPage()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#059669',
    paddingVertical: 16,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: width - 32,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  starContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  welcomeSection: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  welcomeIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#059669',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  welcomeEmoji: {
    fontSize: 40,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#059669',
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  menuContainer: {
    marginBottom: 24,
  },
  menuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuIconContainer: {
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  tipsContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#059669',
    marginLeft: 8,
  },
  tipCard: {
    backgroundColor: '#ECFDF5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  tipText: {
    color: '#065F46',
    fontWeight: '500',
    fontSize: 14,
  },
  pageHeader: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 24,
    borderRadius: 16,
    marginVertical: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 12,
    textAlign: 'center',
  },
  pageSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
  sectionCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#059669',
    marginLeft: 8,
  },
  contentItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#D1FAE5',
    paddingLeft: 16,
    marginBottom: 16,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  contentText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  mealItem: {
    flexDirection: 'row',
    backgroundColor: '#FED7AA',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  mealTime: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#EA580C',
    width: 60,
  },
  mealDetails: {
    flex: 1,
    marginLeft: 16,
  },
  mealName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  mealDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  activityItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#DDD6FE',
    paddingLeft: 16,
    marginBottom: 16,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  activityName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
  },
  activityTime: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7C3AED',
  },
  activityDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  ruleItem: {
    flexDirection: 'row',
    backgroundColor: '#FEE2E2',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  ruleNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#DC2626',
    width: 24,
  },
  ruleText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  checklistText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
  },
  emergencyItem: {
    backgroundColor: '#FEE2E2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  emergencyService: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  emergencyNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 8,
  },
  emergencyDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  procedureItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#FCA5A5',
    paddingLeft: 16,
    marginBottom: 16,
  },
  procedureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  procedureStep: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
});

export default MetaEdgeNYSCGuide;

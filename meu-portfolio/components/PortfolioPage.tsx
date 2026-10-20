import { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export type PortfolioItem = {
  title: string;
  description: string;
  tag?: string;
};

export default function PortfolioPage({
  eyebrow,
  title,
  description,
  items = [],
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items?: PortfolioItem[];
  children?: ReactNode;
}) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>{eyebrow.toUpperCase()}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {children}

      {items.map((item, index) => (
        <View key={`${item.title}-${index}`} style={styles.card}>
          {item.tag ? <Text style={styles.tag}>{item.tag}</Text> : null}
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      ))}

      <Text style={styles.footer}>MEU PORTFÓLIO • 2026</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F7FB' },
  content: { padding: 24, paddingTop: 48, paddingBottom: 40 },
  eyebrow: {
    color: '#0D9488', fontSize: 12, fontWeight: '800',
    letterSpacing: 2, marginBottom: 12,
  },
  title: {
    color: '#14213D', fontSize: 32, fontWeight: '800',
    marginBottom: 12,
  },
  description: {
    color: '#64748B', fontSize: 16, lineHeight: 24,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF', borderRadius: 16,
    padding: 18, marginBottom: 14,
    borderWidth: 1, borderColor: '#E5EAF1',
  },
  tag: {
    color: '#0D9488', fontSize: 11, fontWeight: '800',
    marginBottom: 8, textTransform: 'uppercase',
  },
  cardTitle: {
    color: '#14213D', fontSize: 17, fontWeight: '700',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#64748B', fontSize: 14, lineHeight: 22,
  },
  footer: {
    color: '#94A3B8', fontSize: 10, fontWeight: '700',
    textAlign: 'center', marginTop: 24, letterSpacing: 1,
  },
});

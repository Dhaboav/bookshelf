import Navigation from '@/components/Navigation';
import { Button } from '@/components/mess/button';
import { BookOpen, Library, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="h-screen bg-gray-100 px-4 pt-48 pb-20">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex rounded-2xl bg-linear-(--gradient-primary) p-3">
                        <BookOpen className="h-12 w-12 text-white" />
                    </div>
                    <h1 className="mb-6 bg-linear-(--gradient-primary) bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                        Your Personal Library, Reimagined
                    </h1>
                    <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
                        Organize, track, and discover your book collection with a modern, minimalist
                        interface designed for book lovers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="shadow-lg">
                            <Link to="/dashboard">Get Started</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link to="/books/add">Add Your First Book</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-4 py-20">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="mb-12 text-center text-3xl font-bold">Everything You Need</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="bg-card rounded-xl p-6 text-center transition-shadow hover:shadow-md">
                            <div className="bg-primary/10 mb-4 inline-flex rounded-xl p-4">
                                <Library className="text-primary h-8 w-8" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">Smart Organization</h3>
                            <p className="text-muted-foreground">
                                Effortlessly categorize and search through your entire collection
                            </p>
                        </div>
                        <div className="bg-card rounded-xl p-6 text-center transition-shadow hover:shadow-md">
                            <div className="bg-primary/10 mb-4 inline-flex rounded-xl p-4">
                                <Users className="text-primary h-8 w-8" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">User Management</h3>
                            <p className="text-muted-foreground">
                                Track who's borrowing what and manage your reading community
                            </p>
                        </div>
                        <div className="bg-card rounded-xl p-6 text-center transition-shadow hover:shadow-md">
                            <div className="bg-primary/10 mb-4 inline-flex rounded-xl p-4">
                                <TrendingUp className="text-primary h-8 w-8" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">Reading Insights</h3>
                            <p className="text-muted-foreground">
                                Track your reading progress and discover patterns in your habits
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-10">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
                    <p className="text-muted-foreground mb-8 text-lg">
                        Join thousands of readers organizing their personal libraries with ease
                    </p>
                    <Button asChild size="lg" className="shadow-lg">
                        <Link to="/dashboard">Start Your Library</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Landing;

import Navigation from '@/components/Navigation';
import { Button } from '@/components/mess/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookCopy, BookOpen, Library, TrendingUp } from 'lucide-react';
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
                        <Card className="border-0 bg-white p-6 text-center transition-shadow hover:shadow-md">
                            <CardHeader className="bg-primary/10 mb-4 inline-flex rounded-xl p-4">
                                <Library className="text-primary h-8 w-8" />
                            </CardHeader>
                            <CardTitle className="mb-2 text-xl">Smart Organization</CardTitle>
                            <CardDescription className="text-md">
                                Effortlessly categorize and search through your entire collection
                            </CardDescription>
                        </Card>

                        <Card className="border-0 bg-white p-6 text-center transition-shadow hover:shadow-md">
                            <CardHeader className="bg-primary/10 mb-4 inline-flex rounded-xl p-4">
                                <BookCopy className="text-primary h-8 w-8" />
                            </CardHeader>
                            <CardTitle className="mb-2 text-xl">Book Management</CardTitle>
                            <CardDescription className="text-md">
                                Organize, edit, and manage your entire book collection in one place
                            </CardDescription>
                        </Card>

                        <Card className="border-0 bg-white p-6 text-center transition-shadow hover:shadow-md">
                            <CardHeader className="bg-primary/10 mb-4 inline-flex rounded-xl p-4">
                                <TrendingUp className="text-primary h-8 w-8" />
                            </CardHeader>
                            <CardTitle className="mb-2 text-xl">Reading Insights</CardTitle>
                            <CardDescription className="text-md">
                                Track your reading progress and discover patterns in your habits
                            </CardDescription>
                        </Card>
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

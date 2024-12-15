<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class TaskController extends Controller
{
    public function index_static()
    {
        $tasks = [
            ['id' => 1, 'title' => 'Task 1', 'description' => 'Description of Task 1', 'status' => 'Pending'],
            ['id' => 2, 'title' => 'Task 2', 'description' => 'Description of Task 2', 'status' => 'Completed'],
            ['id' => 3, 'title' => 'Task 3', 'description' => 'Description of Task 3', 'status' => 'In Progress'],
        ];

        return response()->json(['data' => $tasks], 200);
    }
    public function index(): JsonResponse
    {
        // $tasks = Cache::remember('tasks', 60, function () {
        //     return Task::select(['id', 'title', 'description', 'status'])->get();
        // });
        $tasks =  Task::select(['id', 'title', 'description', 'status'])->get();

        return response()->json(['data' => $tasks], 200);
    }

    public function store(TaskRequest $request): JsonResponse
    {
        $task = Task::create($request->validated());
        return response()->json(['message' => 'Task created successfully', 'data' => $task], 201);
    }

    public function update(TaskRequest $request, Task $task): JsonResponse
    {
        try {
            // Check if task exists; this will throw a ModelNotFoundException if it doesn't
            $task->update($request->validated());

            return response()->json(['message' => 'Task updated successfully', 'data' => $task], 200);
        } catch (NotFoundHttpException $e) {
            return response()->json(['message' => 'Task not found'], 404);
        } catch (Exception $e) {
            return response()->json(['message' => 'An error occurred during the update'], 500);
        }
    }

    public function destroy(Task $task): JsonResponse
    {
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully'], 200);
    }
}

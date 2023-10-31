<x-layout title="Adicionar Série">
    <form method="post" action="{{route('series.store')}}">
       @csrf
        <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" class="form-control"/>
        </div>
        <button class="btn btn-primary">adicionar</button>
   </form>   
</x-layout>